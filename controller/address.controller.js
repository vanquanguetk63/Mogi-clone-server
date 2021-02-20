const conn = require("../database/db");
const querystring = require("querystring");


module.exports.GetByProvince = function (req, res) {
  var query = "Select p.id, p._name From province p Order By p._name ASC";
  conn.query(query, function (error, result) {
    if (error) res.send.status(404);
    res.status(200).send(result);
  });
};

module.exports.GetAddress = function (req, res) {
  var id = req.params.id;
  if (Object.keys(req.query).length !== 0) {
    let size = Object.keys(req.query).length;
    let idDistrict = req.query.district;
    if (size === 1) {
      var query =
        "SELECT w.id, w._name, w._prefix FROM ward w where w._province_id=" +
        id +
        " AND w._district_id=" +
        idDistrict;
      conn.query(query, function (error, results) {
        if (error) res.send.status(404);
        res.status(200).send(results);
      });
    } else if (size === 2) {
      var query =
        "SELECT s.id, s._name, s._prefix FROM street s where s._province_id=" +
        id +
        " AND s._district_id=" +
        idDistrict
      conn.query(query, function (error, results) {
        if (error) res.send.status(404);
        res.status(200).send(results);
      });
    }
  } else {
    var query =
      "SELECT d.id, d._prefix , d._name FROM district d where d._province_id =" +
      id +
      " Order By d._name ASC";
    conn.query(query, function (error, results) {
      if (error) res.send.status(404);
      res.status(200).send(results);
    });
  }
};

