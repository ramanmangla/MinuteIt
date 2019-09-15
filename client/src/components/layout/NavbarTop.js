import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Recorder from "recorder-js";
import axios from "axios";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const recorder = new Recorder(audioContext, {
  onAnalysed: data => data
});

let isRecording = false;
let blob1 = null;  
  
const startRecording = async () => {
  console.log("Start recording");
  await recorder.start()
    .then(() => isRecording = true);

  // while(isRecording) {
  //   console.log("Recording...");
  //   await setTimeout(() => {
  //     recorder.stop()
  //       .then(({blob, buffer}) => {
  //         blob1 = blob;
  //     });
  //   }, 5000);

  //   await recorder.start();
  //   await console.log(blob1);
  // }
}

navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(stream => recorder.init(stream))
  .catch(err => console.log("Uh oh... unable to get stream...", err));

async function stopRecording() {
  console.log("Stop recording");
  await recorder.stop()
    .then(({blob, buffer}) => {
      blob1 = blob;
      isRecording = false;
    });
  //await console.log(blob1);
  return await transferAudio();
}

const transferAudio = async () => {
  // return axios({
  //   method:'post',
  //   url: 'http://localhost:8000/retrieve',
  //   data: {
  //     blobKey: blob1
  //   },
  //   validateStatus: (status) => {
  //     return true;
  //   },
  //   headers: {
  //     'responseType': "blob"
  //     // 'Access-Control-Allow-Origin': '*',
  //     // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  //   }
  // }).then((data) => {
  //   console.log(data);
  // }).catch(err => {
  //   console.error(err)
  // });
  let arrayVal = blob1.arrayBuffer();
  // blob1.stream().getReader().read().then((data) => {
  //   arrayVal = data.value;
  //   //console.log(data.value);
  // });
  console.log(blob1.arrayBuffer());
  return await axios
    .post("http://localhost:8000/retrieve", {blobKey: arrayVal})
    .then((data) => console.log(data))
    .catch(err => {
      console.error(err);
  });

  // return await axios
  //   .post("http://localhost:8000/retrieve", {blobKey: blob1}, {
  //     "responseType": "blob"
  //   })
  //   .then((data) => console.log(data))
  //   .catch(err => {
  //     console.error(err);
  // });
}

const onRecord = () => {
  if(isRecording) {
    stopRecording();

  } else {
    startRecording();
  }
};

  return (
    <header className='navbar-top'>
      <div class='inline-div'>
        <i className='fas fa-cookie-bite'></i>
        <h1 class='title'>Minute It</h1>
      </div>
      <ul className='inline-div'>
        <li className='navbar-top-item item-white'>
          {Math.floor(time / 60) + ":" + (time % 60) + "s"}
        </li>
        <li className='navbar-top-item'>
          <Button name='Record' handler={onRecord} />
        </li>
        <li
          className={
            "navbar-top-item " +
            (isRecording ? "item-red" : "item-white") +
            " mic"
          }
        >
          <i class='fas fa-microphone'></i>
        </li>
      </ul>
    </header>
  );
};

NavbarTop.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

NavbarTop.defaultProps = {
  title: "Minute It",
  icon: "fas fa-id-card-alt"
};

export default NavbarTop;
