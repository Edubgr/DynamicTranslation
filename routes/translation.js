var express = require('express');
var configu = require("../configu.js")
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
var router = express.Router();

const languageTranslator = new LanguageTranslatorV3({
  version: '2019-04-04',
  authenticator: new IamAuthenticator({
    apikey: configu.api,
  }),
  url: configu.urlr,
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