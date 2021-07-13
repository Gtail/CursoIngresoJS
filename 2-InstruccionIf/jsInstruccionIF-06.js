function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13) {
		alert("Es un niño");
	} else {
		if(edad <= 17) {
			alert("Es adolescente");
		} else {
			alert("Es un adulto");
		}
	}
}


//FIN DE LA FUNCIÓN
