const conn = require("../database/db");

module.exports.GetHouseByID = function (req, res) {
  let id = req.params.id;
  let query =
    "SELECT post.idUser, title, description, address, price, square, bedroom, toilet, user.nameUser, user.CreateAt, user.phoneUser " +
    "FROM mogi.post " +
    "Join user ON post.idUser = user.idUser " +
    "Where approval = 1 AND post.idPost = " +
    id;
  conn.query(query, function (error, result) {
    if (error) res.send.status(404);
    res.status(200).send(result);
  });
};

module.exports.GetImageById = function (req, res) {

    let id = req.params.id;
  
    var query = `SELECT urlImage FROM mogi.image Where idPost=` + id;
  
    conn.query(query, function (error, result) {
      if (error) res.send.status(404);
      res.status(200).send(result);
    });
  }
