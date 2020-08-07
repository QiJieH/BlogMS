const { User } = require('../../model/user')

module.exports = async (req, res) => {
    // 标识访问位置
    req.app.locals.currentLink = 'user';

    const {message, id} = req.query;

    if(id){
        let user = await User.findById(id);
        res.render('admin/user-edit',{
            warning : message,
            user    : user,
            link    : '/admin/user-modify?id=' + id,
            button  : '修改'
        });
    }else{
        res.render('admin/user-edit',{
            warning : message,
            link    : '/admin/user-edit',
            button  : '添加'
        });
    }
};