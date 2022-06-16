module.exports = {
    select: function(sql,con) {
        con.query(sql, function (err, result, fields)
        {
	
        });
        return '1';
    },
};
