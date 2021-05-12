var nombre = prompt('Ingrese su nombre:');
var nota = prompt('Ingrese su nota:');

if (nota < 0 || nota > 10 || isNaN(nota)) {
  mensaje = 'Ud. ha ingresado un valor no válido.'
}
else if (nota >= 0 && nota < 3) {
  mensaje = nombre + ' su nota es muy deficiente.'
}
else if (nota >= 3 && nota < 5) {
  mensaje = nombre + ' su nota es insuficiente.'
}
else if (nota >= 5 && nota < 6) {
  mensaje = nombre + ' su nota es suficiente.'
}
else if (nota >= 6 && nota < 7) {
  mensaje = nombre + ' su nota está bien.'
}
else if (nota >= 7 && nota < 9) {
  mensaje = nombre + ' su nota es notable.'
}
else if (nota >= 9 && nota <= 10) {
  mensaje = nombre + ' su nota es sobresaliente.'
} else {
  mensaje = 'Hubo algún error en la ejecución.'
}

document.write(mensaje)