const { User } = require('../../model/user');
const pagination  = require('mongoose-sex-page');

module.exports = async (req, res) => {
    // 标识访问位置
    req.app.locals.currentLink = 'user';

    const page = req.query.page;

    let users = await pagination(User).find()
                        .page(page).size(10).display(6)
                            .exec();
    // res.send(users);
    res.render('admin/user', {
        users : users
    });
}