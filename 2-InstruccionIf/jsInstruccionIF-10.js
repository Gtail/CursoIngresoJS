function mostrar() {
  let nota;

  nota = Math.floor(Math.random() * 10 + 1);

  if (nota < 4) {
    alert("Vamos, la proxima se puede " + nota);
  } else if (nota < 9) {
    alert("Estas aprobado " + nota);
  } else {
    alert("Excelente " + nota);
  }
} //FIN DE LA FUNCIÓN
