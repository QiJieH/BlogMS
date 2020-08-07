const formidable = require('formidable');
const path = require('path');
const { Article, validateArticle } = require('../../model/article');

module.exports = async (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        let { title, publishDate, content} = fields;
        let cover = files.cover.path.split('public')[1];
        await Article.create({
            title: title,
            author: req.session.loginuser._id,
            publishDate: publishDate,
            cover: cover,
            content: content
        });
        res.redirect('/admin/article');
    });
};