/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let numero;
	let acumuladorpos = 0;
	let acumuladorneg = 1;
	let flag = 1;
	

	do{ 
		numero = parseInt(prompt("Ingrese un numero: "));
         
        if(numero >= 0  ){

			acumuladorpos += numero;

			alert("Positivo");

		}
	
		else{
			acumuladorneg *= numero;
			alert("negativo");
			flag = 0;
		}

       document.getElementById("txtIdSuma").value =  acumuladorpos;
       document.getElementById("txtIdProducto").value = acumuladorneg;

	   if(flag){
		   acumuladorneg = 0;
	   }




		respuesta = prompt("Quiere ingresar otro numero?");

	} while(respuesta == "si");	
}