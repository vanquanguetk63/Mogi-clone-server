const conn = require("../database/db");
const querystring = require("querystring");

module.exports.GetNewId = function (req, res) {
  var query = "Select max(idPost) as id from post";
  conn.query(query, function (error, result) {
    if (error) res.send.status(404);
    res.status(200).send(result);
  });
};

module.exports.PostToServer = function (req, res) {
  let data = req.body.data;
  var query =
    "Insert into post(idPost, title, description, address, price, square, idUser, idProvince , idDistrict, idWard, idStreet, approval, idPurpose, idType, bedroom, toilet, CreateAt)" +
    "Value (" +
    data.id +
    `,'` +
    data.title +
    `','` +
    data.description +
    `','` +
    data.address +
    `',` +
    data.price * 1 +
    "," +
    data.square * 1 +
    "," +
    data.idUser +
    "," +
    data.idProvince * 1 +
    "," +
    data.idDistrict * 1 +
    "," +
    data.idWard * 1 +
    "," +
    data.idStreet * 1 +
    "," +
    data.approval +
    "," +
    data.idPurpose +
    "," +
    data.idType +
    "," +
    data.bedroom +
    "," +
    data.toilet +
    "," +
    "current_date())";

  conn.query(query, function (error, result) {
    if (error) res.send.status(404);
    res.status(200).send(result);
  });
};

module.exports.PostImg = function (req, res) {
  let data = req.body.data;
  var query = "Insert into image(urlImage,idPost) values";
  for (var i = 0; i < data.img.length; i++) {
    if (i === data.img.length - 1) {
      query += `('` + data.img[i].url + `',` + data.idPost * 1 + ")";
    } else {
      query += `('` + data.img[i].url + `',` + data.idPost * 1 + "),";
    }
  }
  conn.query(query, function (error, result) {
    if (error) res.send.status(404);
    res.status(200).send(result);
  });
};
