function mostrar() {
  let estacion;
  let destino;
  const precio = 15000;
  let precioFinal;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

   switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        precioFinal = precio * 1.2;
      } else if (destino == "Mar del Plata") {
        precioFinal = precio * 0.9;
      } else {
        precioFinal = precio * 0.8;
      }
      break;
    case "Verano":
      if (destino == "Bariloche") {
        precioFinal= precio * 0.8;
      } else if (destino == "Mar del Plata") {
        precioFinal= precio * 1.2;
      } else {
        precioFinal = precio * 1.1;
      }
      break;
    case "Otoño":
    case "Primavera":
      if (destino == "Cordoba") {
        precioFinal = precio;
      } else { preciofinal = precio * 1.1;}
      }
      break;
      alert("El precio final es " + precioFinal);
  } 