import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";
import Recorder from "recorder-js";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const recorder = new Recorder(audioContext, {
  onAnalysed: data => data
});

let blob1 = null;

navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(stream => recorder.init(stream))
  .catch(err => console.log("Uh oh... unable to get stream...", err));

const NavbarTop = ({ title, icon }) => {
  const [isRecording, setRecording] = useState(false);
  // const [time, setTime] = useState(0);
  // let interval;
  let time = 0;

  const onRecord = () => {
    if (isRecording) {
      // clearInterval(interval);
      stopRecording();
    } else {
      startRecording();
      // interval = setInterval(() => {
      //   let newTime = time + 1;
      //   setTime(newTime);
      //   console.log(time);
      // }, 1000);
    }
  };

  const startRecording = () => {
    console.log("Start recording");
    recorder.start().then(() => setRecording(true));
  };

  const stopRecording = () => {
    console.log("Stop recording");
    recorder.stop().then(({ blob, buffer }) => {
      blob1 = blob;
      setRecording(false);
    });
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
