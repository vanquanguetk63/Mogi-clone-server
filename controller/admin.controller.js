const conn = require("../database/db");

module.exports.GetPostIsApproved = function (req, res) {
  let query = "Select * from post where approval != 2";
  conn.query(query, function (error, result) {
    if (error) res.send.status(404);
    res.status(200).send(result);
  });
};

module.exports.GetPostIsNotApproved = function (req, res) {
  let query = "Select * from post where approval = 2";
  conn.query(query, function (error, result) {
    if (error) res.send.status(404);
    res.status(200).send(result);
  });
};

module.exports.UpdatePost = function (req, res)  {
    let query = `UPDATE mogi.post SET approval = ${req.body.approval} WHERE (idPost = ${req.body.id})`
    conn.query(query, function (error, result) {
        if (error) res.send.status(404);
        res.status(200).send(result);
      });
};

module.exports.DeletePost = function (req, res) {
  let query = `DELETE FROM mogi.post WHERE idPost = ${req.body.id}`
  conn.query(query, function (error, result) {
      if (error) res.send.status(404);
      res.status(200).send(result);
    });
}