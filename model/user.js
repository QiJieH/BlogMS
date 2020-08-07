const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username    :   {
        type    :   String,
        required:   true,
        minlength   :   2,
        maxlength   :   14
    },
    email   :   {
        type    :   String,
        required:   true,
        unique  :   true
    },
    password    :   {
        type    :   String,
        required:   true
    },
    role    :   {
        type    :   String,
        required:   true
        // admin 管理员 normal 管理员
    },
    state   :   {
        type    :   Number,
        default :   0
        // 0 启用   1 禁用
    }
});


const User = mongoose.model('User', userSchema);


// 创建管理员账户
// const mongodb = require('./connect');
// async function creatUser() {
//     const salt = await bcrypt.genSalt(10);
//     const pass = await bcrypt.hash('admin', salt);
//     const user = await User.create({
//         username : 'QiJieH',
//         email : '1279656042@qq.com',
//         password : pass,
//         role : 'admin',
//         state : 0
//     })
//     console.log(user);
// } 
// creatUser();

// 批量创建测试账户
// const mongodb = require('./connect');
// async function creatUser(name,ema,pas) {
//     const salt = await bcrypt.genSalt(10);
//     const pass = await bcrypt.hash(pas, salt);
//     const user = await User.create({
//         username : name,
//         email : ema,
//         password : pass,
//         role : 'normal',
//         state : 0
//     })
//     console.log(user);
// };
// for( var i = 46; i > 0; i--) {
//     creatUser("user"+ i, i+"@qq.com", '123456');
// }



// 管理页面添加用户 验证方法
const validateUser = user => {
    // 管理页面添加用户 验证规则
    const schema = {
        username:   Joi.string().required().min(2).max(12).error(new Error('用户名不符合规则')),
        email   :   Joi.string().email().error(new Error('邮箱不符合规则')),
        password:   Joi.string().required().regex(/^[a-zA-Z0-9]{6,24}$/).error(new Error('密码不符合规则')),
        role    :   Joi.string().required().valid('normal','admin').error(new Error('角色值错误')),
        state   :   Joi.number().required().valid(0,1).error(new Error('状态值错误'))
    };
    // 返回验证结果
    return Joi.validate(user, schema);
}




module.exports = {
    User : User,
    validateUser
};