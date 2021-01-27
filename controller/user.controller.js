var conn = require('../database/db');

module.exports.getUserByPhone = function(req, res) {
    var phone = req.query.phone;
    var isExist = false;
    var getUser = 'Select phoneUser from user where phoneUser='+phone;
    conn.query(getUser, function(error, results) {
        if (error) throw error;
        res.send(results);
    });
}
