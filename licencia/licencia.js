var nombre = prompt('Ingrese su nombre:');
var edad = prompt('Ingrese su edad:');

if (isNaN(edad)) {
    mensaje = 'Ud. ha ingresado un dato incorrecto.'
}
else if ( edad < 18) {
    mensaje = nombre + ' deje de tontiar y siga jugando Need for Speed.'
} else if ( edad >= 18 && edad < 100) {
    mensaje = nombre + ' ud. puede sacar la licencia para conducir.'
} else {
    mensaje = nombre + ' ud. debería manejar con San Pedro.'
}

document.write(mensaje);