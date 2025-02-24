const apiResource = require('./apiResource');
const Note = require('../models/note');

const noteService = apiResource(Note);

module.exports = noteService;