var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3307,
    database: 'mogi'
})

conn.connect(function(error) {
    if (error) throw error;
    console.log("Connected!!!")
});

module.exports = conn;