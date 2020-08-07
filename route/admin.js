const express = require('express');
const admin = express.Router();

// 渲染登录页面
admin.get('/login', require('./admin/loginPage'));
// 实现登录功能
admin.post('/login', require('./admin/login'));
// 注销登录
admin.get('/logout', require('./admin/loginout'));
// 用户列表页面渲染
admin.get('/user', require('./admin/userPage'));
// 用户编辑页面渲染
admin.get('/user-edit', require('./admin/user-edit'));
// 用户添加功能
admin.post('/user-edit', require('./admin/user-edit-fn'));
// 用户信息修改
admin.post('/user-modify', require('./admin/user-modify'));
// 用户信息删除
admin.get('/user-delete', require('./admin/user-delete'));
// 文章列表页面渲染
admin.get('/article', require('./admin/articlePage'));
// 文章修改页面渲染
admin.get('/article-edit', require('./admin/article-edit'));
// 文章添加功能
admin.post('/article-add', require('./admin/article-add'));
// 文章删除功能
admin.get('/article-delete', require('./admin/article-delete'));


module.exports = admin;