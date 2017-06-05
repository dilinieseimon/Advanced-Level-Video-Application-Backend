var express = require('express');
var router = express.Router();

var subjects = require('../models/subject.js');


/* GET /subject
listing all subjects */
router.get('/', function(req, res, next) {
  subjects.find(function (err,subject) {
    if (err) return next(err);
    res.json(subject);
  });
});

module.exports = router;
