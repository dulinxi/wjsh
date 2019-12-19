const config = require('./config.database.js');
const db = require('knex')({
  client: 'mysql2',
  connection: config
});

module.exports = db;
