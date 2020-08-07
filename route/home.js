const express = require('express');

const home = express.Router();


home.get('/',require('./home/index'));
home.get('/article',require('./home/article'));
home.post('/comment', require('./home/comment'));
home.get('/login', require('./home/loginPage'));
home.post('/login', require('./home/login'));
home.get('/loginout', require('./home/loginout'));
home.get('/register', require('./home/registerPage'));
home.post('/register', require('./home/register'));
home.get('/about', require('./home/about'));


module.exports = home;