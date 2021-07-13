function mostrar() {
  let mes;

  mes = document.getElementById("txtIdMes").value;

  switch (mes) {
    case "Febrero":
      alert("si tiene 28 dias");
      break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
      alert("si tiene 30 dias");
      break;
    default:
      alert("si tiene 31 dias");
  }
} //FIN DE LA FUNCIÓN
