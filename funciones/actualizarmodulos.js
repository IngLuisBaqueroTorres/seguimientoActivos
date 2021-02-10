
var mysql = require('mysql');
var timer1;
var data1;

var requisito = new XMLHttpRequest(); 

requisito.open('GET', 'http://seguimientoactivos.com/apiseguimiento', true); 
requisito.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
requisito.onload = function () {
  
  // Begin accessing JSON data1 here
  data1 = requisito.response; 
  if (requisito.status >= 200 && requisito.status < 400) {
    data1.forEach(antenas => {
      
     
      timer1 = antenas.tiempo;
            
    });
  } 
}

requisito.send();

requisito.open('POST', 'http://seguimientoactivos.com/apiupdateequipo/add.php', true); 
requisito.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
requisito.send("tagRFID="+timer1+"&cod=456");
