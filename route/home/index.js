const { Article } = require('../../model/article');
const pagination  = require('mongoose-sex-page');

module.exports = async (req, res) => {
    req.app.locals.currentLink = 'home';
    const page = req.query.page;

    let result = await pagination(Article)
                            .page(page).size(6).display(5)
                                .find().populate('author').exec();
    res.render('home/index', {
        result : result
    });
};