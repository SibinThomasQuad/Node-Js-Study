var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app     = express();
var mysql = require('mysql');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true })); //this is to handle the requests
app.engine('html', require('ejs').renderFile); //this is to handle template engine
app.set('view engine', 'html');   //this is to call template engine
var con = mysql.createConnection({
  host: "localhost",
  user: "sibin",
  password: "SibinTh0mas@2020",
  database: "node"
});
app.use(session({secret:'XASDASDA'}));
app.get('/', function(req, res)
{
        res.sendFile('index.html', {root : __dirname + '/template'});
});
app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
