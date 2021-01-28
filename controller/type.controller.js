const conn = require("../database/db");
const querystring = require("querystring");

module.exports.GetPurpose = function(req, res) {
    var query = 'Select * From purpose';
    conn.query(query, function(error, results) {
        if (error) throw(error);
        res.status(200).send(results);
    })
}

module.exports.GetByPurpose = function(req, res) {
    let idType = req.params.idType;
    var query = 'Select t.idType, t.nameType From type t Where t.idPurpose=' + idType;
    conn.query(query, function(error, results) {
        if (error) throw(error);
        res.send(results);
    })
}

