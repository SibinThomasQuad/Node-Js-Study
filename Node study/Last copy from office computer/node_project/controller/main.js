/****Controller***/
var mysql = require('mysql');
var config = require("../config/dbconfig.js");
module.exports = {
    employe: function(req, res) 
    {
        connection=config.db();
    	connection.query("SELECT * FROM login", function (err, result, fields)
        {
	  var userinfo='Sibin';
          res.render(__dirname + "/template/home.html", {userfname:userinfo,userallinfo:result});
	});
    },
    table: function(req, res) 
    {
        var url_param=req.params.remid;
	res.send(url_param);
    },
};
