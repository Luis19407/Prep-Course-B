// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

const { default: simpleGit } = require("simple-git");
const { suma } = require("../../02-JS-II/homework/homework");

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    /* var suma = 0
    for (i = 0; i <= 10; i++){
      suma += i;
    } return suma */
    var acomulador = 0;
    for (var i = 0; i <= 10; i++){
      acomulador = acomulador + i
    }  return acomulador;
}

    

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
 // return array.filter(num => num % 2 === 0);
var pares = [];
for(var i = 0; i < array.length; i++){
  if (array[i] % 2 === 0){
     pares.push(array[i])
  } 
} return pares
} 

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
 /*var numeros = [1,5,4,3];
 var respuesta = [];
 array.forEach(element => respuesta.push(element ** 2));
  return respuesta; */
  return array.map(function(element){
  return element ** 2;
}); 
}


function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
// return array.reduce((acc, element) => acc + element);

var acomulador = 0;
for (var i = 0; i < array.length; i++){
acomulador += array[i];
} return acomulador

/* var total = array.reduce(function(acc + element){
  return acc + valor
}) return total */
}


function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length;
 }
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
