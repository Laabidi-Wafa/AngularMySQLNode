const mysql = require('mysql2');
const config = require('../config/config.json');

const pool = mysql.createPool({
host:config.host,
host:config.user,
host:config.database,
host:config.password,
})

module.exports = pool.promise();