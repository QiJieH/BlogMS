const { User, validateUser } = require('../../model/user');
const bcrypt = require('bcrypt');





module.exports = async (req, res, next) => {
    // 验证表单
    try{
        await validateUser(req.body);
    }catch(e) {
        // return res.redirect(`/admin/user-edit?message=${e.message}`);
        return next(JSON.stringify({   
                path: '/home/register',
                message: e.message
            }));
    };
    // 查询账户存在
    let user = await User.findOne({email : req.body.email});
    if(user) {
        // return res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`);
        return next(JSON.stringify({
            path: '/home/register',
            message: '邮箱地址已经被占用'
        }));
    }
    // 加密密码
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    // 添加数据库
    await User.create(req.body);


    res.redirect('/home/login');
}