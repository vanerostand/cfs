var nombre = prompt('Ingrese su nombre:');
var peso = prompt('Ingrese su peso:');
var altura = prompt('Ingrese su altura:');

var imc = peso / (altura * altura);

if (isNaN(imc)) {
	mensaje = 'No se puede calcular el IMC, ud. ha ingresado un dato no válido.';
} else if (imc < 19) {
	mensaje = nombre + ' su IMC es: ' + imc.toFixed(2) + ' ud. está muy flaquito.'
}
else if (imc >= 19 && imc <= 25) {
	mensaje = nombre + ' su IMC es: ' + imc.toFixed(2) + ' ud. está bien, siga así!'
} else if (imc >= 25 && imc <= 40){
	mensaje = nombre + ' su IMC es: ' + imc.toFixed(2) + ' ud. está fuertecito.'
} else {
	mensaje = nombre + ' ud. debería empezar la dieta urgente!'
}

document.write(mensaje)