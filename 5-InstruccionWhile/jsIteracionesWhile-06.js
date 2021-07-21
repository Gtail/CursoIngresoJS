function mostrar() {
  let numero;
  let contador = 1;
  let acumulador = 0;
  let promedio;

while(contador <= 5) {
  numero = parseInt(prompt("Ingrese un número"));
  acumulador = acumulador + numero;
  contador++;
}

promedio = acumulador / contador;

  document.getElementById("txtIdSuma").value = acumulador;
  document.getElementById("txtIdPromedio").value = promedio;
} //FIN DE LA FUNCIÓN
