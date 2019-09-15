const fs = require("fs");
const axios = require("axios");
const express = require('express')
const app = express();
const multer  = require('multer') //use multer to upload blob data
const upload = multer();

const rootEndpoint = 'https://westus.api.cognitive.microsoft.com/spid/v1.0';
const key = '3deb2289b7f048b8b386d3954a672ba2';

const names = { 'a147b65c-3b72-4c81-bcf5-c4be5ee7738b': 'Mit',
  '84c27be6-3325-46b8-bf86-610a94c4bbb3': 'Random' };

const createProfile = (voice) => {
  // the Verification endpoint to create a new profile  
  const create = rootEndpoint + '/identificationProfiles';

  axios.post(create, JSON.stringify({ 'locale' :'en-us'}),
    { headers: { 'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': key } })
    .then(response => {
      const profileId = response.data.identificationProfileId;
      const enroll = rootEndpoint + '/identificationProfiles/' + profileId + '/enroll';
      axios.post(enroll, voice,
        { headers: { 'Content-Type': 'application/octet-stream', 'Ocp-Apim-Subscription-Key': key },
          params: { shortAudio: true } })
        .then(response => {
          const temp = response.headers['operation-location'].split('/');
          const operationId = temp[temp.length - 1];

          const opStatus = rootEndpoint + '/operations/' + operationId;
          setTimeout(() => {
            axios
              .get(opStatus, { headers: { 'Ocp-Apim-Subscription-Key': key } })
              .then(response => {
                console.log(response.data.status);
              });
          }, 4000);
        })
        .catch(error => console.log(error));
    });
}

const identifyVoice = (voice) => {
  const profileIds = ['0729f1e0-3406-4470-b0d7-578790381ab7', 'a147b65c-3b72-4c81-bcf5-c4be5ee7738b'];
  const identify = rootEndpoint + '/identify?identificationProfileIds=' + profileIds;

  // Identify file
  axios.post(identify, voice,
    { headers: { 'Content-Type': 'application/octet-stream', 'Ocp-Apim-Subscription-Key': key },
      params: { shortAudio: true } })
    .then(response => {
      const temp = response.headers['operation-location'].split('/');
      const operationId = temp[temp.length - 1];
      const opStatus = rootEndpoint + '/operations/' + operationId;

      setTimeout(() => {
        axios
          .get(opStatus, { headers: { 'Ocp-Apim-Subscription-Key': key } })
          .then(response => {
            console.log('status', response.data);
          });
      }, 3000);
    })
};

app.post("/createProfile/:userName", upload.single('soundBlob'), (req, res, next) => {
  const newBuff = req.file.buffer;
  createProfile(newBuff);
  res.send("Done");
 });

app.get("/identifyVoice", (req, res, next) => {
  identifyVoice(req.body);
});

app.listen(process.env.PORT || 7000, () => {
  console.log(`Server running on port ${process.env.PORT || 7000}`);
});