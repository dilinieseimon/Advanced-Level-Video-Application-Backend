var express = require('express');
var router = express.Router();

var lessons = require('../models/lesson.js');


/* GET /lesson
listing all lessons */
router.get('/', function(req, res, next) {
  lessons.find(function (err,lesson) {
    if (err) return next(err);
    res.json(lesson);
  });
});

/* GET /lesson/<subject>
listing all lessons in particular subject */
router.get('/:subject', function(req, res, next) {
  lessons.find({subject:req.params.subject}, function (err, post) {
    if (err) return next(err);
    res.json(post);
    })
});

module.exports = router;
