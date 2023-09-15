const {getUser} = require('../utils/cookies')

async function restricLoggedUser(req, res, next) {
    const token = req.cookies?.token;
    if (!token) return res.redirect('users/login');
    const user = getUser(token)
    if (!user) return res.redirect('users/login');
    req.user = user;
    next();
}



module.exports = restricLoggedUser;