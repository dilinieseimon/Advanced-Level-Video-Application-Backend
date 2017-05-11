var mongoose = require('mongoose');

var lessonSchema = new mongoose.Schema({
    subject: String,
    lessonNo: Number,
    lessonName: String,
});

module.exports = mongoose.model('lesson', lessonSchema);