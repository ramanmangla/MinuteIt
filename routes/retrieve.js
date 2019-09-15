"use strict";
var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.post('/', async function(req, res) {
    // pull in the required packages.
    var sdk = require("microsoft-cognitiveservices-speech-sdk");
    var fs = require("fs");
    var toStream = require('blob-to-stream');

    // replace with your own subscription key,
    // service region (e.g., "westus"), and
    // the name of the file you want to run
    // through the speech recognizer.
    var subscriptionKey = "2f174168eca945e6913e66b065d85e56";
    var serviceRegion = "eastus"; // e.g., "westus"

    // create the push stream we need for the speech sdk.
    var pushStream = sdk.AudioInputStream.createPushStream();

    //console.log(req.body);
    let blob = req.body.blobKey;
    // let arrayBuff = blob.arrayBuffer();
    
    pushStream.write(blob);

    var audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
    var speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);

    // setting the recognition language to English.
    speechConfig.speechRecognitionLanguage = "en-US";

    // create the speech recognizer.
    var recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    // start the recognizer and wait for a result.
    recognizer.recognizeOnceAsync(
    function (result) {
        //console.log(result);
        console.log(result.json);
        /* GET users listing. */
        // router.get('/', function(req, res, next) {
        // res.json(result);
        // });
        res.json(result);

        recognizer.close();
        recognizer = undefined;
    },
    function (err) {
        console.trace("err - " + err);

        recognizer.close();
        recognizer = undefined;
    });
    //res.send(blob);
});

module.exports = router;
