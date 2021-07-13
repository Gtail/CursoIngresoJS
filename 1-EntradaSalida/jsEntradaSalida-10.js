/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
  let importe;
  let descuento;
  let resultado;

  importe = parseInt(document.getElementById("txtIdImporte").value);
  descuento = importe * .25;

  resultado = importe - descuento;
  document.getElementById("txtIdResultado").value = resultado;
}


/* importe = document.getElementById("txtIdImporte").value;
importe = parseFloat(ImporteIngresado);
resultado = importe * 0.75;
resultado = importe - (importe * 0.25);
resultado = importe * 1.25
probar con alert a ver si esta funcionando lo que estamos haciendo
*/