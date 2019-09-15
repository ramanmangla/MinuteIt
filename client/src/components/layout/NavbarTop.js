import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";
import Recorder from "recorder-js";

const audioContext =  new (window.AudioContext || window.webkitAudioContext)();

const recorder = new Recorder(audioContext, {
  onAnalysed: data => data,
});

let isRecording = false;
let blob1 = null;  
  
const startRecording = () => {
  console.log("Start recording");
  recorder.start()
    .then(() => isRecording = true);
}

navigator.mediaDevices.getUserMedia({audio: true})
  .then(stream => recorder.init(stream))
  .catch(err => console.log('Uh oh... unable to get stream...', err));

const stopRecording = () => {
  console.log("Stop recording");
  recorder.stop()
    .then(({blob, buffer}) => {
      blob1 = blob;
      isRecording = false;
    });
}

// function download() {
//   var formData = new FormData();
//   formData.append("name", blob1);

//   //console.log(formData);
//   // var xhr = new XMLHttpRequest();
//   // xhr.open('POST', "http://localhost:3005/retrieve", true);
//   // xhr.send(formData).then((data) => console.log(data));

//   // console.log(blob1.text);
//   // var data = new FormData();
//   // data.append('name', 'audio');
//   // data.append('file', blob1);
//   // console.log(blob1.text());
//   var keysToCheck = blob1.arrayBuffer();
//   console.log(blob1);
//   axios
//     .post("http://localhost:3005/retrieve", {blobKey: blob1}, {
//       "responseType": "blob"
//     })
//     .then((data) => console.log(data))
//     .catch(err => {
//       console.error(err);
//   });

//   // , {
//   //   'Content-Type' : 'multipart/form-data'
//   // }

//   //console.log(blob1);
//   //Recorder.download(blob1, 'my-audio-file'); // downloads a .wav file
// }

const onRecord = () => {
  if(isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
};

const NavbarTop = ({ title, icon }) => {
  return (
    <header className='navbar-top'>
      <div class='inline-div'>
        <i className='fas fa-cookie-bite'></i>
        <h1 class='title'>Minute It</h1>
      </div>
      <ul className='inline-div'>
        <li className='navbar-top-item item-white'>0:48s</li>
        <li className='navbar-top-item'>
          <Button name='Record' handler={onRecord} />
        </li>
        <li className='navbar-top-item item-white mic'>
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
