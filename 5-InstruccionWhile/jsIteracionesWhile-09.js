/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numero;
	let respuesta;
	let maximo;
	let minimo;
	let flag = 0;
   
	do{
		numero = parseInt(prompt("Ingrese un numero: "));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero, intente nuevamente: "));
		}
		if(flag == 0){
			maximo = numero;
			minimo = numero;
		 flag = 1;
		} else if(numero > maximo){
			maximo = numero;
		} else if (numero < minimo) {
			minimo = numero;
		}


   
   
   
		respuesta = prompt("Quiere ingresar otro numero? ").toLowerCase();
   
	   
	} while(respuesta == "si");

	document.getElementById("txtIdMaximo").value; = maximo
	document.getElementById("txtIdMinimo").value; = minimo

}