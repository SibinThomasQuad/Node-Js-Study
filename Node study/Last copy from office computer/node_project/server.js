/****Server(main entry)***/
/********configuring the express start (importing modules)********/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
/********configuring the express end (importing modules)********/
/**************Setting app start*******************/
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./router/router.js'));
/**************Setting app end*******************/
var server = app.listen(8000, function () {
  var host = '127.0.0.1';
  var port = '8000';
  console.log("Example app listening at http://%s:%s", host, port)
})

