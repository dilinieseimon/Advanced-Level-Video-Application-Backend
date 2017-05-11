var express = require('express');
var router = express.Router();

var experiments = require('../models/experiment.js');


/* GET /lesson
listing all experiments */
router.get('/', function(req, res, next) {
  experiments.find(function (err, experiment) {
    if (err) return next(err);
    res.json(experiment);
  });
});

/* GET /lesson/<subject>
listing all experiments in particular subject */
router.get('/:subject', function(req, res, next) {
  experiments.find({subject:req.params.subject}, function (err, post) {
    if (err) return next(err);
    res.json(post);
    })
});

/* GET /lesson/<subject>
listing all experiments in particular subject */
router.get('/:subject/:lessonNo', function(req, res, next) {
  experiments.find({subject:req.params.subject,lessonNo:req.params.lessonNo}, function (err, post) {
    if (err) return next(err);
    res.json(post);
    })
});

module.exports = router;
