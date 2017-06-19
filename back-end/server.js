var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
var Sequelize = require('sequelize');
var multer  =   require('multer');


var sequelize = require('./services/connection');


var User = require('./models/PgUser');

var message = require('./controllers/message');

var upload = require('./services/multerMiddleware');

//Middleware
//app.use(bodyParser.json());


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

//Requests
app.get('/api/message', message.get);


app.post('/api/message', upload.single('photo'), message.post);



var server = app.listen(5000, function () {
    console.log('listening on port ', server.address().port);
})
