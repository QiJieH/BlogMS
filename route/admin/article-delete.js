const { Article } = require('../../model/article');

module.exports = async (req, res) => {
    await Article.findByIdAndDelete(req.query.id);
    res.redirect('/admin/article');
}