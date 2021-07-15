function mostrar() {
  let numero1;
  let numero2;
  let numero3;
  let numero4;
  let numero5;
  let suma;
  let promedio;

  numero1 = parseInt(prompt("Ingrese un numero"));
  numero2 = parseInt(prompt("Ingrese un numero"));
  numero3 = parseInt(prompt("Ingrese un numero"));
  numero4 = parseInt(prompt("Ingrese un numero"));
  numero5 = parseInt(prompt("Ingrese un numero"));

  suma = numero1 + numero2 + numero3 + numero4 + numero5;
  promedio = suma / 5;

  document.getElementById("txtIdSuma").value = suma;
  document.getElementById("txtIdPromedio").value = promedio;
} //FIN DE LA FUNCIÓN
