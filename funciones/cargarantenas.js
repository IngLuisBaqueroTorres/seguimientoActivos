//___________________________________Cargar Antenas___________________________________________________//
var flagg = 0;
var nombreestado;
var estadoestado;
var tttag;
var codigo1;
const play = require('audio-play');
document.write('<SCRIPT LANGUAGE="JavaScript" type="text/javascript" src=".index.html"></SCRIPT>');
var request = new XMLHttpRequest();
request.open('GET', 'http://seguimientoactivos.com/apiposicionantena', true); 
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
request.onload = function () {
  // Begin accessing JSON data here
    var data = JSON.parse(request.response);
  if (request.status >= 200 && request.status < 400) {
      data.forEach(antenas => { 
    	document.formulario1.px.value = antenas.antenax;
      //document.formulario1.py.value = antenas.nombreRFID;
      xx = antenas.antenax;
      yy = antenas.antenay;
      document.images["pc"+yy+"_"+xx].src = "antenaroja.gif";
     const play = require('audio-play');
    });
  } else {
      }
}

request.send();
request.close();


//__________________________________Fin Cargar Antenas________________________________________________//
function showGrid() {
setInterval(showGrid, 300);


//__________________________________Cargar Hora Inicial_______________________________________________//
if(bandera==1){
      flagg = 1;
var request0 = new XMLHttpRequest();
request0.open('GET', 'http://seguimientoactivos.com/apiseguimiento', true); 
request0.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
request0.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(request0.response);
  if (request0.status >= 200 && request0.status < 400) {
    data.forEach(antenas => {
      
     
      timestamp = antenas.tiempo;
      IDrespaldo = antenas.ID;
            
    });
  } 
   bandera=0;
}

request0.send();

}


//___________________________________Fin Cargar Hora Inicial___________________________________________//


//___________________________________Alarma____________________________________________________________//


var request1 = new XMLHttpRequest();
request1.open('GET', 'http://seguimientoactivos.com/apiseguimiento', true); 
request1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
request1.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(request1.response);
  if (request1.status >= 200 && request1.status < 400) {
    var aviso=0;
    data.forEach(antenas => {
      flag2 = antenas.ID;
      timestamp1 = antenas.tiempo;
      nombtag = antenas.nombreRFID;
      tttag = antenas.tagRFID;

        if(timestamp1 > timestamp){
          timestamp = timestamp1;
          var audio = new Audio('beep.mp3');
           audio.play();
           M.toast({html: 'La antena' +nombtag+ 'se ha activado recientemente'});
           audio.play();  

          if(nombtag=="SALIDA"){
            var audio = new Audio('alarm.mp3');
           audio.play();
           M.toast({html: 'La antena'+nombtag+'se ha activado recientemente'});
           var audio1 = new Audio('alarm.mp3');
           audio1.play();
           var audio2 = new Audio('alarm.mp3');
           audio2.play();
           var audio3 = new Audio('alarm.mp3');
           audio3.play();
         }
           
        }

         
    });
  } 
}

request1.send();
//_______________________________________Fin Alarma______________________________________________________//

//_______________________________________Actualizar nombres antenas______________________________________//
if(flagg=='1'){ 
  flagg = 0;
var request90 = new XMLHttpRequest();
request90.open('GET','http://seguimientoactivos.com/apiseguimiento', true);
request90.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
request90.onload = function(){
  var data = JSON.parse(request90.response);
  if(request90.status >= 200 && request90.status < 400) {
    data.forEach(antenas => {
      act1 = antenas.nombreRFID;
    });
  }
}
request90.send();

var request91 = new XMLHttpRequest();
request91.open('GET','http://seguimientoactivos.com/apiposicionantena', true);
request91.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
request91.onload = function(){
  var data = JSON.parse(request91.response);
  if(request91.status >= 200 && request91.status < 400) {
    data.forEach(antenas => {
      act2 = antenas.nombreRFID;
    });
  }
}
request91.send();
if(act1!=act2){
var request10 = new XMLHttpRequest();
      request10.open('POST', 'http://seguimientoactivos.com/apiupdateregistro/add.php', true); 
      request10.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
      request10.send("nombreRFID="+act2+"&cod="+act1);
}
}
//________________________________________Fin actualizar nombres antenas__________________________________//


request911.send();

}

showGrid();