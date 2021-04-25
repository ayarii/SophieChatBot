const express = require('express');
const router = express.Router();
const structjson = require('./dialogflow.js');
const dialogflow = require('dialogflow');
const uuid = require('uuid');

const config = require('../config/dev')

const projectId = config.googleProjectID
const sessionId = config.dialogFlowSessionID
const languageCode = config.dialogFlowSessionLanguageCode


// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);


  // The text query request.
router.post("/textQuery", async (req,res) => {
   
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: req.body.text,
        // The language used by the client (en-US)
        languageCode: languageCode,
      },
    },
  };
 
  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log("responses : ", responses)
  console.log('Detected intent :');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);

  res.send(result.fulfillmentText)
  
})



// The event query request.

router.post("/eventQuery", async (req,res) => {

const request = {
  session: sessionPath,
  queryInput: {
    event: {
      // The query to send to the dialogflow agent
      name: req.body.event,
      // The language used by the client (en-US)
      languageCode: languageCode,
    },
  },
};

// Send request and log result
const responses = await sessionClient.detectIntent(request);
console.log('Detected intent');
const result = responses[0].queryResult;
console.log(`  Query: ${result.queryText}`);
console.log(`  Response: ${result.fulfillmentText}`);

res.send(result.fulfillmentMessages[0].text.text[0])

})

module.exports = router;