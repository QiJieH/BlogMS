module.exports = (req, res) => {
    res.clearCookie('connect.sid');
    res.redirect('/admin/login')
    req.app.locals.userInfo = null;
};