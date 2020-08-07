const gurad = (req, res, next) => {
    if(req.url != '/login' && !req.session.loginuser) {
        // 用户未登录尝试访问管理页面 重定向到登录页
        res.redirect('/admin/login');
    }else{
        if(req.session.loginuser && req.session.loginuser.role == 'normal'){
            // 用户登录 但不是管理员账号 重定向到首页
            // 如果该用户尝试访问管理页面 重定向到首页
            return res.redirect('/home');
        }
        // 放行
        next();
    }
}

module.exports = gurad;