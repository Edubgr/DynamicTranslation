var express = require('express');
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
var router = express.Router();

const languageTranslator = new LanguageTranslatorV3({
  version: '2019-04-04',
  authenticator: new IamAuthenticator({
    apikey: '_lJFjh24vGapEXbtjdGFbY7D0cpkee72qtBkJ9zXzP5T',
  }),
  url: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/d65aadcc-e999-434d-9153-f21c8504f544',
});

router.get('/tradutor/:strin', function(req, res, next) {
    text=req.params.strin
    const translateParams = {
      text: text,
      modelId: 'en-pt',
    };
    console.log(req.params.strin)
    
    languageTranslator.translate(translateParams)
    .then(translationResult => {
      console.log(translationResult.result.translations[0].translation);
      res.send(translationResult.result.translations[0].translation)
    })
    .catch(err => {
      console.log('error:', err);
    });
  });
  
  module.exports = router;