const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'practice-node',
    password : 'Shashi@2000'
}); // we can create multiple(pool) of connections for each query.

module.exports = pool.promise();