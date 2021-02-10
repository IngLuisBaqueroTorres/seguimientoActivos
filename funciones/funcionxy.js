function gridClick(y,x) {
if ( playflag1 == true) {  //agregar antena
       
posx=x;
posy=y;
document.formulario1.px.value = posx;
document.formulario1.py.value = posy;
var request3 = new XMLHttpRequest();
  request3.open('POST', 'http://seguimientoactivos.com/apitablaxy/add.php', true); 
request3.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

window.open('ventana3.html','window','width=300, height= 120','resizable:false');
request3.send("dirx="+posx+"&diry="+posy);
document.images["pc"+y+"_"+x].src = "antenaroja.gif"; 
   }
  

if ( playflag == true) {  //quitar antena antena
	posx=x;
    posy=y;
	var request100 = new XMLHttpRequest();
      request100.open('POST', 'http://seguimientoactivos.com/borrardatos/borrar.php', true); 
      request100.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
      request100.send("antenax="+posx+"&antenay="+posy);
document.images["pc"+y+"_"+x].src = "transparencia.png";        
document.formulario1.px.value = posx;
document.formulario1.py.value = posy;	
   }
   playflag = false;
   playflag1 = false;
}