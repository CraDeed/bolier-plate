const User = require("../models/User");

const auth = (req, res, next) => {
    // 인증처리를 하는곳

    // Client Cookie 에서 Token을 가져온다
    const token = req.cookies.x_auth;

    // Token을 복호화 한후 유저를 찾는다
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true });

        req.token = token;
        req.user = user;
        next();
    });
};

module.exports = auth;
