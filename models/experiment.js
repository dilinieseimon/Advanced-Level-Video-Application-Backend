var mongoose = require('mongoose');

var experimentSchema = new mongoose.Schema({
    subject: String,
    lessonNo: Number,
    expName: String,
    expEngName: String,
    expLink: String,
});

module.exports = mongoose.model('experiment', experimentSchema);