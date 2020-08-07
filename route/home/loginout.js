module.exports = (req, res) => {
    res.clearCookie('connect.sid');
    res.redirect('/home/login')
    req.app.locals.userInfo = null;
};