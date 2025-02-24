const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, default: '' },
});

module.exports = mongoose.model('Note', noteSchema);