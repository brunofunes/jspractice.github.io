// ---------------- Ejercicios de Lógica de Programación 1 ----------------

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

/* ------------> Resuelto
let palabra = "Bruno Funes";

function validarString(palabra) {
    return typeof palabra === 'string';
}


if (validarString(palabra)) {

    console.log(`La cantidad de caracteres es: ${palabra.length}`);

 }  else {

    console.log("Error, el input no es un string");
 }

*/

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

/* ------------> Resuelto


let total = "";
let palabra;
let num;

function recortarTexto(palabra, num) {
  for (i = 0; i < num; i++) {
    total = total + palabra[i];
  }
}

palabra = "Hola, soy tu amigo y docente digital Jonatan Mircha";
num = 51;
recortarTexto(palabra, num);

if (
  typeof palabra === "string" &&
  typeof num === "number" &&
  num <= palabra.length
) {
  console.log(`El texto recortado es: ${total}`);
} else {
  console.error(`Error, ingrese bien los datos!`);
}
*/

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

/* ------------> Resuelto
let texto = "Hola, soy Yonatan Mircha, tu amigo y docente digital"

function separarTexto (texto) {
  let cadena = texto.split(" ");
  console.log(cadena);
}

separarTexto(texto)
*/

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

/* ------------> Resuelto
let palabra = "Hola, soy Yonatan Mircha, tu amigo y docente digital";
let numero = 10;

function repetirTexto(palabra, numero) {
  if (!palabra) {
    return console.error("No se introdujo texto");
  }

  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
}

repetirTexto(palabra, numero);
*/

// ---------------- Ejercicios de Lógica de Programación 2 ----------------

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

/* ------------> Resuelto
let texto = "Hola, soy Jonathan Mircha";

function invertirCadena(texto) {
  console.log(texto.split("").reverse().join(""));
}

invertirCadena(texto);
*/

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

/* ------------> Resuelto
function contarPalabra (cadena, texto) {
  let i = 0;
  let contador = 0;
  
  while (i !== -1) {
    i = cadena.indexOf(texto, i)
    if (i !== -1) {
      i++
      contador++
    }
  }

  return console.log(`La palabra "${texto}" se repite ${contador} veces`)
}

contarPalabra("Hola mundo Hola mundo Hola mundo Hola mundo", "mundo")
*/

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

/* ------------> Resuelto
const contarPolindromos = (palabra = "") => {
  if(!palabra) return console.warn("No ingresaste una palabra o frase");

  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");
  
  if (palabra === alReves) {
    console.log(`La palabra "${palabra}" es palindroma`)
  } else {
    console.log(`La palabra "${palabra}" NO es palindroma`)
  }

}

contarPolindromos("ala")
*/

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

/* ------------> Resuelto
const borrarCarecteres = (texto = "", patron = "") =>
  (!texto)
    ? console.warn("No ingresaste un texto")
    : (!patron)
      ? console.warn("No ingresaste un patron de caracteres")
      : console.info(texto.replace(new RegExp(patron, "ig"), "---> "))

borrarCarecteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
*/

// ---------------- Ejercicios de Lógica de Programación 3 ----------------

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

/* ------------> Resuelto
function numAleatorio (min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(numAleatorio(501, 600));
*/

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

/* ------------> Resuelto
function numCapicua (num) {
  let str = num.toString();
  let alReves = str.split("").reverse().join("")

  if (str === alReves) {
    console.log(`El numero ${num} es capicua`)
  } else console.log(`El numero ${num} NO es capicua`)
}

numCapicua(707)
*/

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

/* ------------> Resuelto
let num = Number

const factorial = function (num) {
  //VALIDACIONES
  if (typeof num !== "number" ) return console.log('El valor ingresado no es un Numero');


  if (num <= 1) {
    return (1); 
  } else {
    return (num * factorial(num - 1));
  }

}

console.log(factorial(5));
*/

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

/* ------------> Resuelto
const numPrimo = function (num) {

  if (num < 4) {
    return console.log(`El numero ${num} es PRIMO`);
  } else {

    if (num % 2 !== 0 && num % 3 !== 0) {
      return console.log(`El numero ${num} es PRIMO`);
    } else {
      console.log(`El numero ${num} NO es primo`);
    }
  }
}

numPrimo(103)
*/

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

/* ------------> Resuelto
function tipoNumero (num) {
  if (num <= 0 || typeof num !== "number") return console.log('Numero invalido')
  
  if (num % 2 === 0) {
    console.log(`El numero ${num} es PAR`);
  } else {
    console.log(`El numero ${num} es IMPAR`);
  }
  
  
}

tipoNumero(8)
*/

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

/* ------------> Resuelto
function convertGrados (num, tipo) {
  if (typeof tipo !== "string" || typeof num !== "number") {
    return console.error("Error, datos invalidos")
  } 
  if (tipo === "C") {
    let resultado = (num * 9/5) + 32;
    return console.log(`Grados Fahrenheit: ${resultado}`)
  }

  if (tipo === "F") {
    let resultado = (num - 32) * 5/9;
    return console.log(`Grados Celsius: ${resultado}`)
  }
}

convertGrados(20, "F")
*/

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

/* ------------> Resuelto
let resultadoDecimal = 0;

function convertBase (bin) {
  for (let i = 0; i < bin.length; i++) {
    resultadoDecimal += parseInt(bin[bin.length - i - 1]) * Math.pow(2, i);
  }
  console.log(resultadoDecimal);
}

convertBase("101110");
*/

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

/* ------------> Resuelto
function descuento(monto, desc) {
  if (
    typeof monto !== "number" ||
    typeof desc !== "number" ||
    desc < 0 ||
    monto < 0
  ) {
    return console.warn("Error datos inválidos");
  }

  montoFinal = monto - (monto * desc) / 100;
  console.log(`El monto final es: ${montoFinal}`);
}

descuento(1000, 15);
*/

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

/* ------------> Resuelto
let contador = 0

function vocales(palabra) {
  for (let i = 0; i < palabra.length; i++) {
    if (
      palabra[i] === "a" ||
      palabra[i] === "e" ||
      palabra[i] === "i" ||
      palabra[i] === "o" ||
      palabra[i] === "u"
    ) {
      contador = contador + 1
    }
  }
  console.log(contador)
}

vocales("Hola soy jonatan Mircha")
*/

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

/* ------------> Resuelto (yo)
function valideNombre (nombre) {
  if (typeof nombre !== "string" ) 
    {console.log("No es un nombre")}
  else
    {console.log(true)}
}

valideNombre("Bruno Funes")
*/

/* ------------> Resuelto (exp regular)
let ExpRegNomApe = "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";

let nombre = "Bruno Funes"

if (typeof nombre === "string" && nombre.match(ExpRegNomApe) != null)
  {console.log("Nombres y Apellidos Válido")}
else 
  {console.log("Nombres y Apellidos NO Válido")}
*/

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

/* ------------> Resuelto
let ExpRegNomApe = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

let email = "brunofunes@hotmail.com"

if (typeof email === "string" && email.match(ExpRegNomApe) != null)
  {console.log("email válido")}
else 
  {console.log("email NO válido")}
*/

/* Practice "Que hable la pág"
let texto = "Hola soy Bruno, tengo 24 años y estoy estudiando para ser programador"
const hablar = (texto) => speechSynthesis.
speak(new SpeechSynthesisUtterance(texto))

hablar(texto);
*/

/* Practice "Que imprima un date cada 1 seg y avise cuando se limpie la consola"
function decirHorario () {
  //Imprimir el date en milisegundos
  const date = new Date;
  console.log(date.getSeconds())
}

setInterval(decirHorario, 1000);


function limpiarConsola() {
//Limpiar consola
console.clear();

//Audio
let texto = "Se limpio la consola"
const hablar = (texto) => speechSynthesis.
speak(new SpeechSynthesisUtterance(texto))

hablar(texto);
}
setInterval(limpiarConsola, 10000);
*/













