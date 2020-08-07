const { User } = require('../../model/user');
const bcrypt  = require('bcrypt');


module.exports = async (req, res) => {
    const {email, password} = req.body;
    // 服务端二次验证
    if(email.trim().length == 0 || password.trim().length == 0) {
        res.status(400).render('admin/error', {msg:'邮箱地址或密码错误'});
    };
    // 查询用户信息
    let user = await User.findOne({email});
    let isVaild = await bcrypt.compare(password, user.password)
    if(user && isVaild ) {
        // 登录成功
        req.session.loginuser = user;   // 存储session
        req.app.locals.userInfo = user;         // 公开信息
        // 重定向仅对已存在的路由生效
        if(user.role == 'admin'){
            res.redirect('/admin/user');
        }else{
            res.redirect('/home/');
        }
        
    }else {
        // 登录失败
        res.status(400).render('admin/error', {msg:'邮箱地址或密码错误'});
    }
};