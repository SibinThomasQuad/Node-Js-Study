var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app     = express();
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 
/* use this to load  template engine*/
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
/*use this to load template engine*/
/*database connections*/
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sibin",
  password: "SibinTh0mas@2020",
  database: "tender"
});
/*database connections*/
/*session modules*/
app.use(session({secret:'XASDASDA'}));
/*session modules*/
app.get('/session', function(req, res)
{
       
        var userinfo=ssn.user; 
	res.send(userinfo);
})
app.get('/speak', function(req, res)
{
        const gTTS = require('gtts'); 
	var speech = 'Welcome to GeeksforGeeks'; 
	var gtts = new gTTS(speech, 'en'); 
	gtts.save('Voice.mp3', function (err, result){ 
    	if(err) { throw new Error(err); } 
    		//console.log("Text to speech converted!"); 
		res.render(__dirname + "/views/play.html");
	});
});
app.get('/', function(req, res)
{
        var loged='sibin thomas';
        ssn=req.session;
        ssn.user=loged; 
	res.send('index page');
});
app.get('/table', function(req, res)
{
  	/*fetch data*/
  	var ip='192.168.5.42';
  	//Select all customers and return the result object:
  	con.query("SELECT * FROM attempts where ip='"+ip+"'", function (err, result, fields) {
    	if (err) throw err;
    	//console.log(result);
    	//res.send(result);
    	res.render(__dirname + "/views/view.html", {datas:result});
});
  /*fetch data*/
});
app.get('/login', function(req, res)
{
res.sendFile('index.html', {root : __dirname + '/views'});
});
app.post('/myaction', function(req, res) {
  res.send('You sent the name "' + req.body.name + '".');
});
app.post('/check', function(req, res) 
{
   var name=req.body.uname;
   //res.send(name,{{name:name}});
   //res.render(__dirname + "/views/home.html", {name:name});
   
   res.render(__dirname + "/views/home.html", {name:name});
   //res.render(__dirname + "/views/home.html", {name:name});
});
app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
