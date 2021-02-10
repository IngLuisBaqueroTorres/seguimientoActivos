var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'sql300.epizy.com',
    user     : 'epiz_23090176',
    password : 'DoTcV9qid',
    database : 'epiz_23090176_baseclinica'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;