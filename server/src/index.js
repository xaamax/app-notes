const dotenv = require('dotenv')
dotenv.config()

require('./config/database');

const server = require('./app/server');
require('./config/routes')(server);