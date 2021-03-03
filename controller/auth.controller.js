const jwtHelper = require("../helpers/jwt.helpers");
const SecretKey = require("../secret/secretkey");
const token = require ("../controller/token.controller");

let tokenList = {};

const accessTokenLife = "1d";

const accessTokenSecret = SecretKey.accessTokenSecret;

const refreshTokeLife = "7d";

const refreshTokenSecret = SecretKey.refreshTokenSecret;

let login = async (req, res) => {
  try {
    // Mình sẽ comment mô tả lại một số bước khi làm thực tế cho các bạn như sau nhé:
    // - Đầu tiên Kiểm tra xem email người dùng đã tồn tại trong hệ thống hay chưa?
    // - Nếu chưa tồn tại thì reject: User not found.
    // - Nếu tồn tại user thì sẽ lấy password mà user truyền lên, băm ra và so sánh với mật khẩu của user lưu trong Database
    // - Nếu password sai thì reject: Password is incorrect.
    // - Nếu password đúng thì chúng ta bắt đầu thực hiện tạo mã JWT và gửi về cho người dùng.
    // Trong ví dụ demo này mình sẽ coi như tất cả các bước xác thực ở trên đều ok, mình chỉ xử lý phần JWT trở về sau thôi nhé:

    
    const userFakeData = {
      id: "1234-5678-910JQK-tqd",
      name: "Trung Quân",
      email: "gdsgdsgds"
    };


    const accessToken = await jwtHelper.generateToken(
      userFakeData,
      accessTokenSecret,
      accessTokenLife
    );

    const refreshToken = await jwtHelper.generateToken(
      userFakeData,
      refreshTokenSecret,
      refreshTokeLife
    );

    // Lưu lại 2 mã access & Refresh token, với key chính là cái refreshToken để đảm bảo unique và không sợ hacker sửa đổi dữ liệu truyền lên.
    // lưu ý trong dự án thực tế, nên lưu chỗ khác, có thể lưu vào Redis hoặc DB
    tokenList[refreshToken] = { accessToken, refreshToken };
    

    return res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    return res.status(500).json(error);
  }
};

let refreshToken = async (req, res) => {
  // User gửi mã refresh token kèm theo trong body
  const refreshTokenFromClient = req.body.refreshToken;
  // debug("tokenList: ", tokenList);

  // Nếu như tồn tại refreshToken truyền lên và nó cũng nằm trong tokenList của chúng ta
  if (refreshTokenFromClient && tokenList[refreshTokenFromClient]) {
    try {
      // Verify kiểm tra tính hợp lệ của cái refreshToken và lấy dữ liệu giải mã decoded
      const decoded = await jwtHelper.verifyToken(
        refreshTokenFromClient,
        refreshTokenSecret
      );

      // Thông tin user lúc này các bạn có thể lấy thông qua biến decoded.data
      // có thể mở comment dòng debug bên dưới để xem là rõ nhé.
      // debug("decoded: ", decoded);
      const userFakeData = decoded.data;

      const accessToken = await jwtHelper.generateToken(
        userFakeData,
        accessTokenSecret,
        accessTokenLife
      );

      // gửi token mới về cho người dùng
      return res.status(200).json({ accessToken });
    } catch (error) {
      // Lưu ý trong dự án thực tế hãy bỏ dòng debug bên dưới, mình để đây để debug lỗi cho các bạn xem thôi

      res.status(403).json({
        message: "Invalid refresh token.",
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
  login: login,
  refreshToken: refreshToken,
};
