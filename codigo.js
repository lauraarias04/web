
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mi página Web</title>
  </head>
  <body>
    <h1> Amazon prime donde el corazón exprime sensaciones</h1>
    <img src="https://logodownload.org/wp-content/uploads/2018/07/prime-video-logo-0.png" height="200" 
         width="200">  
    <p> Amazon Prime, una plataforma que  ofrece miles de títulos sin coste adicional 
      a la afiliación mensual o anual . En ella se podrá:</p>
    <ul>
        <li>Ver películas, series, trailers, entre otras muchas.</li>
        <li>Hacer listas de reproducción</li>
        <li>Descargar películas y series gratuitamente en cualquier instante.</li>
    </ul>
    <p> Para más información, visita la página 
      <a href="https://www.amazon.es/amazonprime" target="_blank">¿Qué es Prime Video?</a></p>
    <button> Iniciar sesión</button>
   
  </body>
</html>        
html {
  background-color: #666666;
}

body {
  width: 80%;
  margin: 0 auto;
  background-color: #BDBCBC;
  padding: 0 30px 10% 20px;
  border: 4px solid red;
}

h1 {
  color: white;
  width: 100%;
  border: 5px solid red;
  text-align: center;
  padding: 5px 0;
  text-shadow: 2px 1px 7px black;
}

img{
  display: block;
  margin: 0 auto;
}

p,ul {
  font-size: 100%;
  font-family: "Readex Pro", sans-serif;
  line-height: 1.5;
  letter-spacing: 1px;
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Introduzca su nombre');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Amazon prime donde el corazón exprime sensaciones, 
    ' + myName;
  }
}

if(! localStorage.getItem('name')) {
  setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Amazon prime donde el corazón exprime sensaciones,  
    ' + storedName;
  }

myButton.onclick = function() {
  setUserName();
}
