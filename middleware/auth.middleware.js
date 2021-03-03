const jwtHelper = require("../helpers/jwt.helpers");
const SecretKey = require('../secret/secretkey');

const accessTokenSecret = SecretKey.accessTokenSecret;

let isAuth = async (req, res, next) => {
  const tokenFromClient = req.headers["x-access-token"];

  if (tokenFromClient) {
    try {
      const decoded = await jwtHelper.verifyToken(
        tokenFromClient,
        accessTokenSecret
      );

      req.jwtDecoded = decoded;

      next();
    } catch (error) {
      return res.status(401).json({
        message: "Unauthorized.",
      });
    }
  } else {
    // Không tìm thấy token trong request
    return res.status(403).send({
      message: "No token provided.",
    });
  }
};

module.exports = {
  isAuth: isAuth,
};
