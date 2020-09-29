// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var aux;
  if(x>=y) aux=x;
  else aux=y;
  return aux;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var saludar;
  if(idioma==='aleman'){
    saludar='Guten Tag!';
  }else if(idioma==='mandarin'){
    saludar='Ni Hao!';
  }else if(idioma==='ingles'){
    saludar='Hello!';
  }else if(typeof idioma==='undefined'){ 
    saludar='Hola!';
  }else saludar='Hola!';
  return saludar;
}

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    return (numero===10||numero===5);
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return (numero>20&&numero<50);
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return numero%1===0;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var aux;
  if(numero%3===0 && numero%5===0){
    aux='fizzbuzz';
  }else if(numero%3===0){
    aux='fizz';
  }else if(numero%5===0){
    aux = 'buzz';
  }else aux=numero;
  return aux;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var primo=true;
  if(numero===1||numero===0||numero===4){
    primo=false;
  }else{for(let i=2;i<numero/2;i++)
          {
            if(numero%i===0) 
            {
            primo=false;
            break;
            }
          }
       }
  return primo;
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
