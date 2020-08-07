module.exports = (req, res) => {
    req.app.locals.currentLink = 'about';
    res.render('home/about');
}