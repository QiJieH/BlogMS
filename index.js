// 模块引入
const express = require('express');
const path    = require('path');
const bodyParser  = require('body-parser');
const session = require('express-session');
const guard   = require('./middleware/loginGuard');
const mongodb = require('./model/connect');
const template= require('art-template');
const dateFormat  = require('dateformat');
const morgan  = require('morgan');
const config  = require('config');

// 主路由
const app   =   express();
// 框架部署
app.use(express.static(path.join(__dirname, 'public')))
app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
template.defaults.imports.dateFormat = dateFormat;

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(session({secret: 'secret key', resave : false, saveUninitialized : false}));

console.log(config.get('des'));
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
}

// 路由管理
const home   =   require('./route/home');
const admin  =   require('./route/admin');

app.use('/admin', guard)
app.use('/home', home);
app.use('/admin', admin);

app.use((err, req, res, next) => {
    const result = JSON.parse(err);
    let params = [];
    for(let attr in result) {
        if(attr != 'path') {
            params.push(attr + '=' + result[attr]);
        }
    }
    res.redirect(`${result.path}?${params.join('&')}`);
});


// 端口监听
app.listen(80);
console.log('网站服务器在线');