var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app     = express();
var router = express.Router();
var mysql = require('mysql');
var sqltools = require("./db.js");
var register = require("./register.js");
app.use(bodyParser.urlencoded({ extended: true })); //this is to handle the requests
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var con = mysql.createConnection({
  host: "localhost",
  user: "sibin",
  password: "SibinTh0mas@2020",
  database: "node"
});
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
app.use(session({secret:'XASDASDA'})); 	
app.get('/read', function(req, res)
{
var fs = require('fs');
var path = process.cwd();
var buffer = fs.readFileSync(path + "/text.txt");
console.log(buffer);

});
app.get('/register', function(req, res)
{
var reg=register.register();
res.send(reg);
});
app.get('/set', function(req, res)
{
obj = { my: "Special", variable: 42 };
success = myCache.set( "myKey", obj, 10000 );
res.send('cached');
});
app.get('/get', function(req, res)
{
var value = myCache.get( "myKey" );
res.send(value);
});
app.use(session({secret:'XASDASDA'}));
app.get('/remove/:remid', function(req, res)
{
/*just tried the require*/
var sql="delete FROM login where id="+req.params.remid;
var value = sqltools.select(sql,con);
if(value==1)
{
return res.redirect('/home');
}
});
app.post('/adduserback', function(req, res)
{
  var email=req.body.email;
  var password = req.body.password;
  var fullname = req.body.name;
  var sql="insert into login (uname,pass,name) values ('"+email+"','"+password+"','"+fullname+"')";
  con.query(sql, function (err, result, fields)
  {
	res.send('user created');
  });
});
app.get('/adduser', function(req, res)
{
  res.sendFile('register.html', {root : __dirname + '/template'});
});
app.get('/home', function(req, res)
{
        
        var userinfo=ssn.myname; 
        //res.sendFile('home.html', {root : __dirname + '/template'});
        con.query("SELECT * FROM login", function (err, result, fields)
        {
          res.render(__dirname + "/template/home.html", {userfname:userinfo,userallinfo:result});
        });
        
	
});
app.get('/', function(req, res)
{
        res.sendFile('login.html', {root : __dirname + '/template'});
});
app.post('/login', function(req, res) {
 var username=req.body.username;
 var password=req.body.password;
 con.query("SELECT * FROM login where uname='"+username+"' and pass='"+password+"'", function (err, result, fields) {
 //if (err) throw err;
 //res.render(__dirname + "/views/view.html", {datas:result});
 if(result !='')
 {
 var user=result[0].name;
 ssn=req.session;
 ssn.myname=user; 
 return res.redirect('/home');
 }
 else
 {
  res.send('<font color="red">INVALID LOGIN DETAILS</font>');
 }
});
});
app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
