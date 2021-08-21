//CLASE1


// Formas de declarar variables
// var
// let
// const


// Valores primitivos de las variables

// Number
// String
// undefined
// null
// Boolean
// symbol 


// valores no primitivos

// Object
// arrays


var nombree;
console.log(nombree);


var numero1 = 10;
var numero2 = 28;

// Operaciones entre variables


var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var dividir = numero2 / numero1;

// trucos para seleccionar una variable muchas veces control + D
// trucos para volver algo en comentario control + K + C

var DiasDeLaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado","domingo"]
console.log(DiasDeLaSemana[1]); // Lunes


// var persona = {nombre: !"Valentina", apellido: "Olmedo"};
// console.log("Nombre: ", persona.nombre)
// console.log("Apellido: ", persona.apellido)

//ESTO ES COMO UN POP OUT
let nombreingresado = prompt("Ingresa tu nombre")
alert("el nombre del ingresado es: " + nombreingresado)

console.log(nombreingresado);


let numeroA = parseFloat(prompt("Ingresa numeroA"));
let numeroB = parseFloat(prompt("Ingrese numero B"));

let SumaAB = numeroA + numeroB;

console.log(SumaAB);
console.log("El tipo de valor de A es")


// CLASE 2 || CONDICIONALES EN JS

var unnumero = 5
if (unnumero == 5)
console.log("ESTO ES CORRECTO")

if (unnumero == 7)
console.log("ESTO ES INCORRECTO")


//EJEMPLOS DE IF & ELSE

let uncolor ="Rojo"
if (uncolor == "Rojo"){
    console.log("Felicitaciones el color es rojo")
}
else{
    console.log("el color es otro")
}



let Usuario = prompt("Ingresas nombre de usuario")
if (Usuario == "Valentina"){
    alert("El nombre de usuario ingresado es correcto")
}
else{
    alert("No existe el usuario")
}

// let esvalida = true;
// let numerico = 10;
// let esMayor5 = (numero >5);
 
// if (esvalida){
//     alert("TRUE");
// }


var primernumero = 100
var segundonumero = 11


if (primernumero == segundonumero){
    alert("los numeros son iguales")
}
else{
    alert("los numeros son distintos")
}

if (primernumero < 15){
    alert ("el numero ingresado es menor a 15")
}
else if (primernumero > 15){
    alert("el numero ingresado es mayor a 15")
}
else{
    alert("el numero es 15")
}


//Condiciones compuestas por &&

let auto = "BMW";
let modelo = 2019;

if (auto = "BMW" && modelo > 2018){
    console.log("Tu auto es nuevo")
}else if(auto = "BMW"&& modelo < 2018){
    console.log("Tu auto es viejo")
}



// CLASE 2 ciclos

// ciclos do
// ciclos while
// ciclos do while


// SENTENCIA CONTINUA


for (let i = 1; i <=10; i++){

//Si la variable i es igual 5 interrumpo el for 

if ( i ==5){
    continue;
}

alert(i);

}

//FUNCIONA

// for( let i = 0; i < 3; i++){
//     alert("HOLA");
//     console.log("iteración:", i);
// }

// for(let i = 0; i < 10; i = i + 2){
//     console.log("iteracion: ", i);
// }

for(let i = 0; i <= 10; i++){
 if (i == 5){
     break;
 }
 console.log("iteracion: ", i)
}

//CICLO WHILE - FUNCIONA

// let entrada = prompt ("Ingresar un dato");
// //Repetimos con while hasta que el usuario ingresa "ESC"
// while (entrada != "ESC"){
//     alert("El usuario ingreso " + entrada);
//     //Volvemos a solicitar un dato. En la proxima iteracion se evalua si no es ESC.
//     entrada = prompt("Ingresar otro dato")
// }

//ESTRUCTURA DO WHILE

let nuumrero = 0;
do{
    //Repetimos con do...while mientras el usuario ingresa un numero
    nuumero = prompt ("Ingresar Numero");
    console.log(nuumero);
    //Si el parseo no resulta un numero se interpreta el bucle
} while(parseInt(nuumero));


//SWITCH - MAS ABAJO HAY EJEMPLOS


//EJEMPLOS DE CICLOS WHILE Y DO WHILE funciona

// let entrada = prompt("Ingresa tu nombre");
// while (entrada != "Salir"){
//     console.log("Hola, la entrada que ingresaste es: ", entrada)
//     entrada = prompt("Ingresa una entrada correcta")
// }

// let pais;

// do{
   
// pais = prompt("Ingresa tu pais");
// pais = pais.toUpperCase();

// }

// switch(pais){

//     case "Uruguay"
//     alert("El pais ingresado es Uruguay");

//     for (let i = 0; i < 2; i++)
//     console.log("Soy de Uruguay")
// break;
// default:
//     alert ("No conozco ese pais")

// } while(pais!="")


// CLASE 4 PROGRAMACION CON FUNCIONES

// funciones: es un conjunto de instrucciones que se agrupan para realizar una tarea concreta.

 function saludar(){
     console.log("Hola estudiantes");
 }

 saludar();

 // las funciones sob objetos, para ejecutarla la llamo como hice arriba y asi aparece en la consola.

// formas de escribir Camello solicitarNombre solicitarApellido

//PARAMETROS SE PONEN ENTRE LOS PARENTESIS DE LA FUNCION

// LOS VALORES ASIGNADOS SON ARGUMENTOS

// function conParametros(parametro1, parametro2)

let resultado = 0;
function sumar (primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}
function mostrar(mensaje){
    console.log(mensaje);
}
sumar(6,3);
mostrar(resultado);

// 6 y 3 son argumentos
// cuando lleva nombre le digo parametros


// funciones tienen entradas y salidas (return)

let resultadoo = sumar(5,8);

function mmultiplicarPor2(numeroo){
    return numeroo *2;

}

let resultadoo = mmultiplicarPor2(20);
console.log(resultadoo);

// GENERALIZACION DE FUNCIONES

// function eleva(num, potencia){
//     return num ** potencia;
// }


// let resultadoo = eleva(2,3)
// console.log(resultadoo);

// // function operacion(num, potencia){
// let resultado;

// let numeroElevado = eleva(num, potencia);
// resultado = mmultiplicarPor2(numeroElevado);

// return resultado
// }


// FUNCIONES VARIABLES

// funciones de call back


// let multiplica = mmultiplicarPor2(nummero){
//     return nummero * 2;
// }

// console.log(multiplica(3));

// function ejecutaInstrucciones(instruccion){
// instruccion();
// }

// let instruccion1 = ejecutaInstrucciones(multiplica)

//CONTEXTO DE EJECUCION

// termina la ejecuccion cuando terminan las instrucciones o cuando tengo un return

//PILA DE LLAMADAS (LEE, ORDENA, LO RESUELVE)


//FUNCIONES ANONIMAS Y FUNCIONES FLECHA

// FUNCIONES ANONIMAS SON FUNCIONES QUE NO TIENEN NOMBRE, SE LE DA NOMBRE A LA CONSTANTE

// const suma = (a,b) => a + b

//EJEMPLO DE ARROW FUNCTIONS

const laSuma = (num1, num2) => num1 + num2;
const mostrar = mensaje => console.log("El resultado es: ", mensaje)
const laResta = function laResta(num1, num2){
    return num1 - num2
}

function calcularPrecioFinal(precio){
    let precioFinal = laResta(laSuma(precio,20),5);
    return precioFinal;
}

let precioFinal = calcularPrecioFinal(10)
mostrar(precioFinal);



























