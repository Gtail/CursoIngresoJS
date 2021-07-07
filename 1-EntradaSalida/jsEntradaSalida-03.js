/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre; //primero se declara la variable//

	nombre = document.getElementById("txtIdNombre").value;
	//document es el archivo HTML porque si vamos al html 03 encontraremos js en la variable//

	alert(nombre);
	
}


