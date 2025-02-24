const express = require('express');

module.exports = function (server) {
    const router = express.Router();
    server.use('/api', router);

    const noteService = require('../api/noteService');
    router.use('/notes', noteService);
};
