var express = require('express');
var router = express.Router();

router.get('/input', function(req, res, next) {
  res.render('input', { title: 'Entrada' });
});

router.post('/input/dynlation', function(req, res, next) {
  var text = req.body.text
  res.render('dynlation', {title:"Tradução Dinâmica", text: JSON.stringify(text)});
});

module.exports = router;






