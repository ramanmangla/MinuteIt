"use strict";
var express = require('express');
var router = express.Router();

// pull in the required packages.
var sdk = require("microsoft-cognitiveservices-speech-sdk");
var fs = require("fs");

// replace with your own subscription key,
// service region (e.g., "westus"), and
// the name of the file you want to run
// through the speech recognizer.
var subscriptionKey = "2f174168eca945e6913e66b065d85e56";
var serviceRegion = "eastus"; // e.g., "westus"
var filename = "/Users/damansharma/Documents/GitHub/MinuteIt/routes/test1.wav"; // 16000 Hz, Mono

// create the push stream we need for the speech sdk.
var pushStream = sdk.AudioInputStream.createPushStream();

// open the file and push it to the push stream.
fs.createReadStream(filename).on('data', function(arrayBuffer) {
  pushStream.write(arrayBuffer.buffer);
  //console.log(arrayBuffer.buffer);
}).on('end', function() {
  pushStream.close();
});

// we are done with the setup
console.log("Now recognizing from: " + filename);

// now create the audio-config pointing to our stream and
// the speech config specifying the language.
var audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
var speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);

// setting the recognition language to English.
speechConfig.speechRecognitionLanguage = "en-US";

// create the speech recognizer.
var recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

// start the recognizer and wait for a result.
recognizer.recognizeOnceAsync(
  function (result) {

    /* GET users listing. */
    router.get('/', function(req, res, next) {
      res.json(result);
    });

    recognizer.close();
    recognizer = undefined;
  },
  function (err) {
    console.trace("err - " + err);

    recognizer.close();
    recognizer = undefined;
  });

// router.post('/check', function(req, res) {
//   console.log(req.body.exampleValue);
// })

module.exports = router;
