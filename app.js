// -------------ARRAYS-------------- Clase nro 11

/*
const colores= ["Blanco", "Rojo", "Verde"];
    console.log(colores);

 colores.push("Negro");  //Agrega el elemento a la Array
     console.log(colores);

 colores.pop();   //Elimina el ultimo elemnto de la Array
     console.log(colores);

*/

// -------------OBJETOS------------- Clase nro 12

/*
const Auto = {
    Color: "Rojo",  //Lo elemento dentro de un Objeto se llaman atributos
    Marca: "BMW",
    Rodado: 32,
    Velocidad: "345km/h",
    Disponible: true,
    Modelos: ["Racing", "Sport", "OffRoad"],
    Contacto: {
        email: "bmw@hotmail.com",
        ig: "@bmw",
        twitter: "@BMWLatam",
    },
    saludar: function() {       //Las Funciones dentro de un Objeto se les llama métodos
        console.log("Hola Somos BMW");
    },
    presentacion: function() {
        console.log(`Hola, te estamos ofreciento un ${this.Marca} de color ${this.Color}`)
    },
}

console.log(Auto);   //Imprimir el Objeto
console.log(Auto.Contacto.email);   //Imprimir atributo dentro del Objeto del Objeto
console.log(Auto.Rodado);       //Imprimir atributo dentro del Objeto
Auto.saludar();  //Imprimir método dentro de un objeto
Auto.presentacion();   //Imprimir método dentro de un objeto
console.log(Object.keys(Auto));
console.log(Object.values(Auto));
console.log(Auto.hasOwnProperty("Color"));
console.log(Auto.hasOwnProperty("Altura"));
*/

// -------------SWITCH------------- Clase nro 14

/*
let dia = 60

switch (dia) {
    case 0:
        console.log("Lunes")
        break;
    case 1:
        console.log("Martes")
        break;
    case 2:
       console.log("Miércoles")
        break;
    case 3:
        console.log("Jueves")
        break;
    case 4:
        console.log("Viernes")
        break;
    case 5:
        console.log("Sábado")
        break;
    case 6:
        console.log("Domingo")
        break;
    default:
        console.log("Error introduzca un día válido")
        break;
}
*/

// -------------LOOP WHILE / FOR------------- Clase nro 15

/* while

let contador = 0


while (contador < 20) {         //Mientras sea falsa la condición, el codigo se seguirá ejecutando
    console.log("El contador vale: " + contador);
    contador++
}*/

/* for

for (let count = 0; count < 10; count++) {              //for (inicialización de variable; condicion; incremento/decremento)
    console.log("El valor del contador es: " + count)
    
}
*/

/* for en array

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];  

for (let i = 1; i < numeros.length; i=i+2) {        //recorro los nros pares del array
    console.log(numeros[i])  //imprimo el indice del array
}
*/

/*for in

const persona = {
    Nombre: "Bruno",
    Apellido: "Funes",
    Edad: 24,
    Ciudad: "Rafaela"
}

for (const propiedad in persona) {
         //console.log(propiedad)           
         console.log(`Key: ${propiedad} ---- Value: ${persona[propiedad]}`)     //Recorre e imprime todos los elementos de un Objeto
    }
*/

/*for of

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (const iterator of numeros) {     //Recorre e imprime el Array
    console.log(iterator);   
}
*/

// -------------BREACK / CONTINUE------------- Clase nro 17

/* break
const numeros = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {

    if (i === 5) {
        break;              // Finaliza el ciclo, en este caso cuando i = 5
    }
    
    console.log(numeros[i]);
}
*/

/* continue
const numeros = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {

    if (i === 5) {
        continue;              // Omite el elemento, en este caso cuando el nro que esta en la posición 5, es decir el 6
    }
    
    console.log(numeros[i]);
}
*/

/* Ej continue
const numeros = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i = 0; i < numeros.length; i++) {

    if (i%2 !== 0) {
        continue;              
    }
    
    console.log(numeros[i]);
}
*/

// -------------OBJETO LITERARIO------------- Clase nro 19

/* Ej Objeto Literario



let nombre = "Analia"
let apellido = "Colombo"
let edad = 64


const persona = {
    nombre,
    apellido,
    edad,
    altura: 1.70,
    saludar(){
        console.log("Hola mi nombre es analia")
    }
}

console.log(persona)
console.log(persona.saludar())

*/

// -------------REST & Operador Spread ------------- Clase nro 20

/* Ej Rest
function sumar(a, b, ...c) {       //El ...c es un array, y registra todo numero a sumar desp de ingresar a y b
    
    let resultado = a + b;

    // Agarra el array "c" y lo recorre la cantidad de nros que tiene el array para sumar al resultado de a + b

    c.forEach(function (numeroDelArrayC) {          
        
        resultado += numeroDelArrayC;

    });

    return resultado
}

console.log(sumar(10,25));
console.log(sumar(10,25, 40, 129, 1000, 321, 54));
*/

/* Ej Operador Spread

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

console.log(arr1, arr2);

//Unir los dos arrays

const arrT = [...arr1, ...arr2];
console.log(arrT);
*/

// -------------ARROW Functions------------- Clase nro 21

/* Forma Larga
const saludo = function () {
    console.log(`Hola`);
}

saludo();
*/

/* Forma Corta cuando tengo una sola linea en la función (Evito corchetes)


const saludo = () => console.log(`Hola`);

saludo();
*/

/*Forma Corta cuando recibo parametros y tengo una sola linea en la función (Evito corchetes)


const saludo = (nombre) => console.log(`Hola ${nombre}`);

saludo("Bruno");
*/

/*Forma Corta cuando recibo dos o mas parámetros (Devuelve el return automaticamnete)

const sumar = (a = 0, b = 0) => a + b;

console.log(sumar(50, 2));
*/

// -------------PROTOTIPOS------------- Clase nro 22

/* Ejemplo Prototipo con Metodo dentro de la función constructora (Duplica constantemente el método, es decir, poco eficiente)

function Persona (nombre, genero) {        //Funcion CONSTRUCTORA
    
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Métodos
    this.saludar = function () {
        console.log(`Hola soy ${nombre}`)
    }
}


const bruno = new Persona("Bruno", "Hombre"),           //Diferentes instacias del constructor
    fiorella = new Persona("Fiorella", "Mujer");


console.log(bruno);
console.log(fiorella);
bruno.saludar();
fiorella.saludar();
*/

/* Ejemplo Prototipo con Metodo fuera de la función constructora (No duplica constantemente el método, es decir, más eficiente)


function Persona (nombre, genero) {        //Funcion CONSTRUCTORA
    
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

}

//Métodos
Persona.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
}

const bruno = new Persona("Bruno", "Hombre"),           //Diferentes instacias del constructor
    fiorella = new Persona("Fiorella", "Mujer");


console.log(bruno);
console.log(fiorella);

bruno.saludar();
fiorella.saludar();

*/

// -------------CLASES------------- Clase nro 24

/* Ej Clase
class persona {
    //Constructor + Atributos
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        
    }

    //Metodo
    saludo () {
        console.log("hola");
    }
}


const p1 = new persona("Bruno", "Funes");
const p2 = new persona("Juan", "Funes");


console.log(p1, p2)
console.log(p1.saludo(), p2.saludo())
*/

/* Ej Clase y herencia prototipica
class persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    
    }

    //Metodo
    saludo () {
        return(`hola mi nombre es ${this.nombre} ${this.apellido}`);
    }
}


class datos extends persona {                            // "extends" sirve para vincular la clase "datos" con la clase "persona"
    constructor(nombre, apellido, edad, altura) {
        super(nombre, apellido)                          //"super" es para que obtenga los parametros del prototipo "persona"
        this.edad = edad
        this.altura = altura
    }
}



const p1 = new persona("Bruno", "Funes");
const p2 = new persona("Juan", "Funes");

const datosP1 = new datos("Pablo", "Funes", 32, "1,85m")



console.log(p1)
console.log(p1.saludo())
console.log(p2)
console.log(p2.saludo())

console.log(datosP1.saludo())  //datosP1 Heredó los atributos y el método de el prototipo "persona"
*/

// -------------Métodos estáticos, Getters y Setters ------------- Clase nro 25

/* Ej de Método Estático
class persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    
    }

    //Metodo
    saludo () {
        return(`hola mi nombre es ${this.nombre} ${this.apellido}`);
    }
}


class datos extends persona {                            // "extends" sirve para vincular la clase "datos" con la clase "persona"
    constructor(nombre, apellido, edad, altura) {
        super(nombre, apellido)                          //"super" es para que obtenga los parametros del prototipo "persona"
        this.edad = edad
        this.altura = altura
    }

    
    static humano () {           //-----> Static permite crear una funcion dentro de una clase o subclase que se pueda ejecutar sin antes crear una instancia 
        
        
        console.log('Individuo de la especie humana (Homo sapiens), primate caracterizado por el desarrollo de su capacidad intelectual, abstracción, introspección y comunicación de gran complejidad.')
    }
}


console.log(datos.humano())  // Console log de la f() humano sin antes crear una instancia
*/

/* Ej de GET y SET




const persona = {
    nombre: 'Bruno',
    apellido: 'Funes',

    get nombreCompleto() {  //---------> GET
        return `${persona.nombre} ${persona.apellido}`
    },

    set nombreCompleto(value) {   //---------> SET
        const parts = value.split(' ');
        this.nombre = parts[0];
        this.apellido = parts[1];
    }
};

persona.nombreCompleto = 'Juan Gomes';

console.log(persona)


// IMPORTANTE: Los métodos get y set se utilizan para asignar y extraer atributos de un objeto.
// Es muy importante tener en cuenta que el nombre de los getters/setters no puede ser
// el mismo que la propiedad porque se produciría un bucle: al acceder a la propiedad
// invocaríamos al método que a su vez accede a la propiedad que invoca al método.
// Por ello, muchos desarrolladores utilizan el guión bajo para nombrar la propiedad.

*/

// -------------Objeto console------------- Clase nro 26

/* Ej
console.error(`Esto es un error`);

console.warn(`Esto es un warning`);

console.info(`Esto es un msj de info`);

console.log(window);

console.log(document);

console.dir(window)

console.group("Familia")
console.log("Bruno");
console.log("Juan");
console.log("Guille");
console.log("Pablo");
console.log("Analia");
console.log("Rubén");
console.groupEnd();


console.table(Object.entries(console))


const numeros = [1,2,3,4,5,6,7];
const letras = ["a","b","c","d","e","f","g"];

console.table(numeros);
console.table(letras);


const bruno = {
    nombre: "Bruno",
    apellido: "Funes",
    edad: 23,
    altura: "1.93m",
}

console.table(bruno);
*/

// -------------Objeto Date------------- Clase nro 27

/* Ej
console.log(Date())

let fecha = new Date ();
console.log(fecha)


//dia del mes
console.log(fecha.getDate())
//dia de la semana
console.log(fecha.getDay())
//dia del mes
console.log(fecha.getMonth())
//dia del año
console.log(fecha.getFullYear())
//Horas del dia
console.log(fecha.getHours())
//fecha: Thu Feb 29 2024
console.log(fecha.toDateString())
//fecha: 29/2/2024, 17:55:46
console.log(fecha.toLocaleString())
//fecha: 29/2/2024
console.log(fecha.toLocaleDateString())
// Segundos desp del 1970
console.log(Date.now())

let cumpleBruno = new Date(2000, 7, 4); //añó, mes, dia
console.log(cumpleBruno)
*/

// -------------Objeto Math------------- Clase nro 28

/* Ej
console.log(Math)
console.log(Math.PI) // 3.14
console.log(Math.abs(-6.7)) // Valor positivo
console.log(Math.ceil(7.2)) //Redondea para arriba
console.log(Math.round(7.49)) // Redondea al valor mas cercano
console.log(Math.sqrt(90)) //Raiz cuadrada
console.log(Math.pow(2,6)) //elevar el primaro al segundo
console.log(Math.sign(-65)) // negativo (-1) cero (0) positivo (1)
console.log(Math.random()) //Otorga valor random entre 0 y 1
console.log(Math.random() * 1000) // Otorga valor random entre 0 y 1000
console.log(Math.round(Math.random() * 1000)) // Otorga valor random entre 0 y 1000 pero sin decimales
*/

// -------------alert, confirm y prompt ------------- Clase nro 30

/* Ej
let alerta = alert(`Hola esto es una Alerta`);
let confirmacion = confirm(`Hola esto es una confirmación`);
let aviso = prompt(`Hola esto es un aviso!`)

console.log(alerta, confirmacion, aviso);
*/

// -------------Funciones Anónimas Autoejecutables------------- Clase nro 32

/* Ej
(function () {                      //La funcion se ejecuta apenas carga la pag.
    console.log(`Mi primer IIFE`);
})();          //-------> Obligatoirio el ;



(function (d, w, c) {                      //La funcion se ejecuta apenas carga la pag.
    console.log(d);
    console.log(w);
    console.log(c);
})(document, window, console);
*/

// -------------setTimeout & setInterval------------- Clase nro 44

/* Ej
let saludarInterval = setInterval(() => {
    console.log(`Hola, soy Bruno y este es es mi primer setInterval`)        // Ejecuta cada 5000 ms el console.log
}, 5000);

setInterval(saludar())

// clearInterval(saluda) // para frenar el setInterval
*/
/* Ej
let saludarTieout = setTimeout(() => {
    console.log(`Hola, soy Bruno y este es es mi primer setTimeout`)        // Ejecuta despues de 5000 ms el console.log una sola vez
}, 5000);

// clearTimeout // para frenar el setTimeout
*/

// -------------Callback------------- Clase nro 46

/* Ej
function primero(segundo) {
  setTimeout(function () {
    console.log("Pimero");
    segundo()
  }, 3000);
}

function segundo() {
  console.log("Segundo");
}

primero(segundo);
*/


/* Ej String Iterable
const iterable = "kudshflksahfkasdj"

const iterador = iterable[Symbol.iterator]();


// console.log(iterable)
// console.log(iterador)

let next = iterador.next();

while (!next.done) {
    console.log(next.value);
    next = iterador.next();
}
*/

/* Generators Iterable
function* generadorNumerosPares() {
    let numero = 0;
    while (true) {
        yield numero;
        numero = numero + 2;
    }
}

const iterador = generadorNumerosPares();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
*/

/* addEventListener (TAMAÑO DE VIEWPORT Y VENTANA)
window.addEventListener("resize", (e) => {
    console.clear()
    console.log("RESOLUCIÓN DEL VIEWPORT")
    console.log(innerHeight)
    console.log(innerWidth)
    console.log("RESOLUCIÓN DE LA VENTANA")
    console.log(outerHeight)
    console.log(outerWidth)
})
*/


/*
const hola = {
    nombre: 'Bruno',
    apellido: 'Funes',
    imprimirThis () {
    console.log(this)
   } 
}

hola.imprimirThis()

console.log(navigator.connection)
*/







