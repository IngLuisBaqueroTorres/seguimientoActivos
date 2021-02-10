const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'cara.jpg';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);
//$peliculas["antenas"] = array();
        
var request = new XMLHttpRequest();
request.open('GET', 'http://seguimientoactivos.com/apiposicionantena', true); 
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(antenas => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = antenas.nombre;

      const p = document.createElement('p');
      antenas.description = antenas.nombre.substring(0, 300);
      p.textContent = `${antenas.nombre}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();