const conn = require("../database/db");

module.exports.GetToBuy = function (req, res) {
  let query = 'Select * from post where idPurpose = 1';
  conn.query(query, function (error, result) {
    if (error) res.send.status(404);
    res.status(200).send(result);
  });
};

module.exports.GetImageById = function (req, res) {
  let id = req.body.data.id;

  var query = `SELECT urlImage FROM mogi.image Where idPost=` + id;

  conn.query(query, function (error, result) {
    if (error) res.send.status(404);
    res.status(200).send(result);
  });
}

