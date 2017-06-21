var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
var Sequelize = require('sequelize');
var multer  =   require('multer');


var sequelize = require('./services/connection');


var UserModel = require('./models/PgUser');

var user = require('./controllers/user');

var upload = require('./services/multerMiddleware');

//Middleware
//app.use(bodyParser.json());


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

//Requests
app.get('/api/user', user.get);


app.post('/api/user', upload.single('image'), user.post);


var server = app.listen(5000, function () {
    console.log('listening on port ', server.address().port);
})