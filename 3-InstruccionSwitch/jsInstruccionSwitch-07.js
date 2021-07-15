function mostrar() {
  let destino;

  destino = document.getElementById("txtIdDestino").value;

  switch (destino) {
    case "Cataratas":
      alert("Norte");
      break;
    case "Ushuaia":
      alert("Sur");
      break;
    case "Mar del Plata":
      alert("Este");
	  break;
    default:
      alert("Oeste");
  }
}
/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
 */
