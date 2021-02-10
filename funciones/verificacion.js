//document.write('<SCRIPT LANGUAGE="JavaScript" type="text/javascript" src="./funciones/variables.js"></SCRIPT>');
/*
var request1 = new XMLHttpRequest();
request1.open('GET', 'http://seguimientorfid.rf.gd/apiseguimiento', true); 
request1.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request1.status >= 200 && request1.status < 400) {
    data.forEach(antenas => {
    	
      
      timestamp1 = antenas.tiempo;
      tRFIDalarm = antenas.tagRFID; 
      
    
      
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
  if(timestamp < timestamp1){
        nRFIDalarm = antenas.nombreRFID; 
       var reproducir = new Audio();
        reproducir.src = "beep-07.mp3";
        reproducir.play();
  }
}

request1.send();*/