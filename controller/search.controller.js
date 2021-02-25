const conn = require("../database/db");

module.exports.Search = function (req, res) {
  let title = req.body.data.search;
  let idProvince = req.body.data.idProvince * 1;
  let idType = req.body.data.idType * 1;
  let price = req.body.data.price * 1;

  let query = "SELECT * FROM mogi.post ";
  if (title !== "") {
    query += ` where title like '%${title}%' `;

    if (idProvince !== 0) {
      query += ` AND idProvince = ${idProvince} `;
    }

    if (idType !== 0) {
      query += ` AND idType = ${idType} `;
    }

    if (price !== 0) {
      query += ` AND price = ${price} `;
    }
  } else if (idProvince !== 0 || idType !== 0 || price !== 0) {
    query += "where";
    if (idProvince !== 0) {
      if (idType !== 0 || price !== 0) {
        query += ` idProvince = ${idProvince} AND`;
      } else {
        query += ` idProvince = ${idProvince}`;
      }
    }

    if (idType !== 0) {
      if (price !== 0) {
        query += `  idType = ${idType} AND `;
      } else {
        query += `  idType = ${idType}`;
      }
    }

    if (price !== 0) {
      query += `  price <= ${price} `;
    }
  }

  if (query.includes('where') === true) {
    query += ` AND idPurpose = ${req.body.data.purpose} `;
  } else {
    query += ` where idPurpose = ${req.body.data.purpose} `;
  }
   
  query += ' AND  approval = 1'

  conn.query(query, function (error, result) {
    if (error) res.send.status(404);
    res.status(200).send(result);
  });
};
