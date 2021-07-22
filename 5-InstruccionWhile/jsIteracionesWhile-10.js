/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
  let numero;
  let acumuladorNeg = 0;
  let acumuladorPos = 0;
  let contadorPos = 0;
  let contadorNeg = 0;
  let contadorCeros;
  let contadorPar = 0;
  let contadorImp = 0;
  let promedio = 0;
  let promedioNeg = 0;
  let respuesta;
  let diferencia = 0;
  let flagPos = 0;
  let flagNeg = 0;

  do {
    numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)) {
      numero = parseInt(prompt("Numero invalido, Intente nuevamente "));
    }
    respuesta = prompt("Quiere ingresar otro numero? si/no").toLowerCase();
  } while (respuesta == "si");

  if (numero > 0) {
    acumuladorPos += numero;
  } else if (numero < 0) {
    acumuladorNeg += numero;
  } else {
    contadorCeros++;
  }
  if (numero % 2 == 0) {
    contadorPar++;
  } else {
    contadorImp++;
  }
  if (flagPos == 1) {
    promedio = acumuladorPos / contadorPos;
  }
  if (flagNeg == 1) {
    promedioNeg = acumuladorNeg / contadorNeg;
  }
  diferencia = acumuladorPos - acumuladorNeg;

  console.log("1- Suma de los negativos: " + acumuladorNeg);
  console.log("2- Suma de los positivos: " + acumuladorPos);
  console.log("3- Cantidad de positivos: " + contadorPos);
  console.log("4- Cantidad de Negativos: " + contadorNeg);
  console.log("5- Cantidad de Ceros: " + contadorCeros);
  console.log("6- Cantidad de Numeros Pares: " + contadorPar);
  console.log("7- Cantidad de Numeros Impares: " + contadorImp);
  console.log("8- Promedio positivos: " + promedio);
  console.log("9- Promedio negativos: " + promedioNeg);
  console.log("10- Diferencia entre positivos y negativos: " + diferencia);

}
//estrategia de resolucion
// 1- declarar variables
// numero/ acumulador negativos / acumulador positivos/ contador positivos
// contador negativos/ contador de ceros/ contador de pares/ promedio positivos / promedio/ promedio negativos
// respuesta/ diferencia

// genero un bucle del tipo mientras el usuario quiera (do-while)
// cosas que se repiten (va dentro del bucle)
// 2.1 pido el numero
// 2.2 valido que sea un numero
//2.3 identifico el signo del numero (positivo/negativo/cero con if else if else)
// 2.3.1 positivo → acumulo positivos y lo cuento
// 3.3.2 negativo → acumulo negativos y lo cuento
// 3.3.3 cero → contar los numeros
// 3.4 indicar si es par
// 3.4.1 si es par → lo cuento
// 4. calculo promedio de los positivos
// 4.1 calculo promedio de negativos
// 4.1 calculo promedio de negativos
// 4.1 calculo promedio de negativos
// 4.2 calculo la diferencia entre cantidad de positivos y cantidad de negativos
