/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  let largo;
  let ancho;
  let alambre;

  largo = parseInt(document.getElementById("txtIdLargo").value);
  ancho = parseInt(document.getElementById("txtIdAncho").value);

  alambre = largo * ancho;

  alert("La cantidad de alambre a comprar es " + alambre);
}
function Circulo() {
  let radio;
  let diametro;
  let circunferencia;

  radio = parseFloat(document.getElementById("txtIdRadio").value);
  diametro = radio * 2;

  circunferencia = diametro * Math.PI;

  alert("La cantidad de alambre circular a comprar es " + circunferencia);
}
function Materiales() {
  let largo;
  let ancho;
  let contrapisocemento;
  let contrapisocal;
  const CEMENTO = 2;
  const CAL = 3;

  largo = parseInt(document.getElementById("txtIdLargo").value);
  ancho = parseInt(document.getElementById("txtIdAncho").value);

  contrapiso = largo * ancho;
  contrapisocemento = contrapiso * CEMENTO;
  contrapisocal = contrapiso * CAL;

  alert("Usted necesita esta cantidad de bolsas de cemento " + contrapisocemento + " Y necesita esta cantidad de bolsas de cal  " + contrapisocal);


  
}

// declarar variables (largo, ancho y radio)
