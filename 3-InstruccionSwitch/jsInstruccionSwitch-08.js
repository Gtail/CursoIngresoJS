function mostrar() {
  let destino;

  destino = document.getElementById("txtIdDestino").value;

  switch (destino) {
    case "Mar del plata":
    case "Cataratas":
      alert("CALOR");
      break;
    default:
      alert("FRIO");
  }
} //FIN DE LA FUNCIÓN
