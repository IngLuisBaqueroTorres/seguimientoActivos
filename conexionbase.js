const remote = require('electron').remote 
const main = remote.require('./main.js')

 var mysql = require('mysql');
    /*-----------------------funcin para dar nombre a los equipos--------------*/
              
                    
                
                 getFirstTenRows(function(rows){

                var html = '';

                rows.forEach(function(row){
                   
                   
                    console.log(row);                                   
                    document.formulario.txtcod.value = row.tagRFID;
                    

                });
                document.querySelector('#table > tbody').innerHTML = html;
                
            });
     


  function getFirstTenRows(callback){
            var mysql = require('mysql');

            // Add the credentials to access your database
            var connection = mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : '',
                database : 'baseprueba'
            });
            // connect to mysql
            connection.connect(function(err) {
                // in case of error
                if(err){
                    console.log(err.code);
                    console.log(err.fatal);
                }
            });
            // Perform a query
            $query = 'SELECT  tagRFID FROM `registro_tag` order by length(ID) ASC, ID ASC ';

            connection.query($query, function(err, rows, fields) {
              
                if(err){
                    console.log("An error ocurred performing the query.");
                    console.log(err);
                    return;
                }
                callback(rows);

                console.log("Query succesfully executed");
            });

            // Close the connection
            connection.end(function(){
                // The connection has been closed
            });
}