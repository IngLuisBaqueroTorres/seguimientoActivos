/*document.write('<SCRIPT LANGUAGE="JavaScript" type="text/javascript" src="./funciones/variables.js"></SCRIPT>');
var request2 = new XMLHttpRequest();
request2.open('GET', 'http://seguimientoactivos.com/apiposicionantena', true); 
request2.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request2.status >= 200 && request2.status < 400) {
    data.forEach(antenas => {

 for(x in data){
      //document.formulario1.py.value= nRFIDalarm; 
      dato=document.formulario1.py.value;
       
      if(dato == 'antena1'){//nRFIDalarm
      	xx = data[x].antenax;
      	yy = data[x].antenay;
        document.images["pc"+yy+"_"+xx].src = "antenaverde.gif";
      }
    }
        });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
  request2.send();
*/
