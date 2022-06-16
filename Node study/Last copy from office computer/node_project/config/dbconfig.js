var mysql = require('mysql');
module.exports = {
    db: function() {
        var con = mysql.createConnection({
  	host: "localhost",
  	user: "sibin",
  	password: "SibinTh0mas@2020",
  	database: "node"
	});
        return con;
    },
};
