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
  })
};

module.exports.Login = function(req, res) {
  let data = req.body.data;
  var query = 'Select phoneUser, nameUser, CreateAt from user where ' +
  "phoneUser='" + data.phoneNumber + "' AND " +
  "passwordUser='" + data.password + "'";
  conn.query(query, function(error, results){
    if (error) throw error;
    res.send(results);
  })
}
