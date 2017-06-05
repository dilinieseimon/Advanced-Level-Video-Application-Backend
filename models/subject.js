var mongoose = require('mongoose');

var subjectSchema = new mongoose.Schema({
    subject: String,
    description: String,
    engdescription: String,
});

module.exports = mongoose.model('subject', subjectSchema);