/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let multiplicar;
  
	//levanto los datos de las cajas de texto
  
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
  
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
  
	//realizamos operacion
  
	suma = numero1 + numero2;
  
	//muestro el resultado
  
	alert("La suma es " + suma);

}

function restar()
{
	let numero1;
	let numero2;
	let resta;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
  
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resta = numero1 - numero2;

	alert("La resta es " + resta);

	
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let multiplicacion;
  
	//levanto los datos de las cajas de texto
  
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
  
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
  
	//realizamos operacion
  
	multiplicacion = numero1 * numero2;
  
	//muestro el resultado
  
	alert("La suma es " + multiplicacion);
}

function dividir()
{
	let numero1;
	let numero2;
	let division;
  
	//levanto los datos de las cajas de texto
  
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
  
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
  
	//realizamos operacion
  
	division = numero1 / numero2;
  
	//muestro el resultado
  
	alert("La suma es " + division);

}

