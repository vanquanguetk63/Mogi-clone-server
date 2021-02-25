var conn = require("../database/db");

module.exports.GetUserByPhone = function (req, res) {
  var phone = req.query.phone;
  var isExist = false;
  var getUser = "Select phoneUser from user where phoneUser=" + phone;
  conn.query(getUser, function (error, results) {
    if (error) throw error;
    if (results.length > 0) {
      isExist = true;
    }
    res.send(isExist);
  });
};

module.exports.SignUp = function (req, res) {
  let data = req.body.data;
  var query =
    `Insert into user(phoneUser, passwordUser, nameUser, emailUser, CreateAt) value('` +
    data.phoneNumber +
    "','" +
    data.password +
    "','" +
    data.fullName +
    "','" +
    data.email +
    "', current_date())";

  conn.query(query, function (error, results) {
    if (error) throw error;
    res.send("success");
  });
};

module.exports.Login = function (req, res) {
  let data = req.body.data;
  var query =
    "Select idUser, phoneUser, nameUser, CreateAt from user where " +
    "phoneUser='" +
    data.phoneNumber +
    "' AND " +
    "passwordUser='" +
    data.password +
    "'";
  conn.query(query, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
};

module.exports.GetApprovedPostByIDUser = function (req, res) {
  var query = `SELECT * FROM mogi.post Where idUser = ${req.body.data.id} AND approval = 1`;
  conn.query(query, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
};

module.exports.GetNotApprovedPostByIDUser = function (req, res) {
  var query = `SELECT * FROM mogi.post Where idUser = ${req.body.data.id} AND approval = 0`;
  conn.query(query, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
};

module.exports.GetIsApprovingPostByIDUser = function (req, res) {
  var query = `SELECT * FROM mogi.post Where idUser = ${req.body.data.id} AND approval = 2`;
  conn.query(query, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
};

module.exports.SaveToFavorite = function (req, res) {
  var query = `Insert into favorite(idPost, idUser) value (${req.body.data.idPost},  ${req.body.data.id})`;
  conn.query(query, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
};

module.exports.DeleteFromFavorite = function (req, res) {
  var query = `Delete FROM favorite Where idUser = ${req.body.data.id} AND idPost = ${req.body.data.idPost}`;
  conn.query(query, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
};

module.exports.GetFavorite = function (req, res) {
  var query = `Select * 
  from mogi.post
  inner join favorite on post.idUser = favorite.idUser
  where post.idPost = favorite.idPost AND favorite.idUser = ${req.body.data.id}
  `;
  conn.query(query, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
};

module.exports.CheckIdIsFavorite = function (req, res) {
  var query = `SELECT * FROM favorite Where idUser = ${req.body.data.id} AND idPost = ${req.body.data.idPost}`;
  conn.query(query, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
};


module.exports.LoginAdmin = function (req, res) {
  let data = req.body.data;
  var query =
    "Select adminUser from admin where " +
    "adminUser ='" +
    data.email +
    "' AND " +
    "adminPassword='" +
    data.password +
    "'";
  conn.query(query, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
};
