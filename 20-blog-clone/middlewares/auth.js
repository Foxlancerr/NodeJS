const {verifyToken} = require('../utils/token')

async function restricLoggedUser(req, res, next) {
    const token = req.cookies?.token;
    if (!token) return res.redirect('/user/login');
    const user = verifyToken(token)
    if (!user) return res.redirect('/user/login');
    req.user = user;
    next();
}



module.exports = restricLoggedUser;