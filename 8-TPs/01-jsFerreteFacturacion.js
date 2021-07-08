/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  let preciouno;
  let preciodos;
  let preciotres;
  let suma;

  preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);
  preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);
  preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);

  suma = preciouno + preciodos + preciotres;

  alert("La suma es " + suma);
}
function Promedio() {
  let preciouno;
  let preciodos;
  let preciotres;
  let suma;
  let promedio;

  preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);
  preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);
  preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);

  suma = preciouno + preciodos + preciotres;

  promedio = suma / 3;

  alert("El promedio es " + promedio);
}
function PrecioFinal() {
  let preciouno;
  let preciodos;
  let preciotres;
  let suma;
  let iva;
  let resultadofinal;

  preciouno = parseInt(document.getElementById("txtIdPrecioUno").value);
  preciodos = parseInt(document.getElementById("txtIdPrecioDos").value);
  preciotres = parseInt(document.getElementById("txtIdPrecioTres").value);

  suma = preciouno + preciodos + preciotres;

  iva = suma * 1.21;

  resultadofinal = iva + suma;

  alert("El precio final más IVA es " + resultadofinal);
}
