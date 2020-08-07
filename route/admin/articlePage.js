const { Article } = require('../../model/article');
const pagination  = require('mongoose-sex-page');

module.exports = async (req, res) => {
    // 标识访问位置
    req.app.locals.currentLink = 'article';

    const page = req.query.page;

    let articles = await pagination(Article).find()
                            .page(page).size(10).display(6)
                                .populate('author').exec();
    // res.send(articles);
    res.render('admin/article', {
        articles : articles
    });
};