module.exports = async (req, res) => {
    // 标识访问位置
    req.app.locals.currentLink = 'article';

    res.render('admin/article-edit');

};