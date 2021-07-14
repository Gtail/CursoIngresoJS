function mostrar() {
  let estacion;
  let destino;
  const precio = 15000;
  let preciofinal;
  let aumento = 0;
  let descuento = 0;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        preciofinal = precio * 1.2;
      } else if (destino == "Mar del Plata") {
        preciofinal = precio * 0.9;
      } else {
        preciofinal = precio * 0.8;
      }
      break;
    case "Verano":
      if (destino == "Bariloche") {
        preciofinal= precio * 0.8;
      } else if (destino == "Mar del Plata") {
        preciofinal= precio * 1.2;
      } else {
        preciofinal = precio * 1.1;
      }
      break;
    case "Otoño":
    case "Primavera":
      if (destino == "Cordoba") {
        preciofinal = precio;
      } else { preciofinal = precio * 1.1;}
      }
      break;
      alert("El precio final es " + preciofinal);
  }
 /* calcular el valor de preciofinal en una sola variable
  colocamos aumento o descuento segun cada caso de estacion y destino 
  y luego hacemos el calculo final por UNICA VEZ despues del alert
  preciofinal = precio + aumento - descuento;
}


*/
