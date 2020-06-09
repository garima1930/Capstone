var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');
});

router.get('/detail', function(req, res, next) {
  res.send('User details');
});

module.exports = router;
