function sum(array1, array2) {
  let result = [];
  if (array1.length != array2.length) {
    result[0] = 'Error: Los arrays deben ser de igual magnitud';
  }
  else {
    for (let i = 0; i < array1.length; i++) {
      result.push(array1[i] + array2[i]);
    }
  }
  return result;
}

resultado = sum([1,2,3,4],[1,2,3]);
document.writeln('Ejemplo 1: [1,2,3,4],[1,2,3] <br>Resultado: ', resultado);
document.writeln('<br>-----------------------------------------------<br>');
resultado = sum([1,2,3],[3,5,6]);
document.writeln('Ejemplo 2: [1,2,3],[3,5,6] <br>Resultado: [', resultado, ']');