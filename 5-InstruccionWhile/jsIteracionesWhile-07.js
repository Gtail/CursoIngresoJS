/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let respuesta;
	let numero;
	let acumulador = 0;
	let contador = 0;
	let promedio;

	do { numero = parseInt(prompt("Ingrese un numero"));
	acumulador = acumulador + numero;
	contador++;

	respuesta = (prompt("Desea ingresar mas numeros? "));


	} while (respuesta == "si")

	promedio = acumulador / contador;

parseInt(document.getElementById("txtIdSuma").value) = acumulador;
parseInt(document.getElementById("txtIdPromedio").value) = promedio; 

}