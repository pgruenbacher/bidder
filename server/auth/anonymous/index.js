'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();

router.post('/', passport.authenticate(['basic', 'anonymous'], { session: true }),
  function(req, res) {
  if (req.user) {
    res.json({ name: req.user.username });
  } else {
    res.json({ name: 'anonymous' });
  }
});

module.exports = router;
