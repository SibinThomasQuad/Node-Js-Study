var http = require('http'); 
var fs = require('fs');
var path = require('path');
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "sibin",
  password: "SibinTh0mas@2020",
  database: "node"
});
// Create a server object 
http.createServer(function (req, res) { 

      
    // http header 
    res.writeHead(200, {'Content-Type': 'text/html'});  
      
    var url = req.url; 
      
    if(url ==='/about') { 
        res.write(' Welcome to about us page');  
        res.end();  
    } 
    else if(url ==='/contact') { 
        con.query("SELECT * FROM login", function (err, result, fields) {
        var json = JSON.stringify(result);
    	res.write(json);
        res.end();
});
    } 
    else { 
         res.writeHead(200, {"Content-Type": "text/html"});
         fs.createReadStream(path.resolve(__dirname+'/template', 'login.html')) 
         .pipe(res);
         //res.end();  
    } 
}).listen(3000, function() { 
      
    // The server object listens on port 3000 
    console.log("server start at port 3000"); 
}); 

