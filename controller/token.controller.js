const conn = require("../database/db");

module.exports.GetListToken = async function (req, res) {
  let rs = {}
  let query = 'Select refreshToken, accessToken from token';
  await conn.query(query, function (error, result) {
    if (error) return 'error';
    return result;
  });

  return rs;

};