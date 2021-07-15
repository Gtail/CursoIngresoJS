function mostrar() {
  let estacion;
  let destino;
  let resultado;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        resultado = "Se viaja";
      } else {
        resultado = "No se viaja";
      }
      break;
    case "Verano":
      if (destino == "Cataratas" || destino == "Mar del plata") {
        resultado = "Se viaja";
      } else {
        resultado = "No se viaja";
      }
      break;
    case "Primavera":
      if (destino != "Bariloche") {
        resultado = "Se viaja";
      } else {
        resultado = "No se viaja";
      }
      break;
    case "Otoño":
      if (destino == "Bariloche") {
        resultado = "Se viaja";
      } else {
        resultado = "Se viaja";
      }
      break;
  }
  alert(resultado);
}
