/* Condicion que se ejecuta por ser verdadera */

if (true) {
    console.log("Hola");
}

/* esta condicion no se ejecuta por ser falsa */

if (false) {
    console.log("Hola");
}

/* condicional con variacion */

if (false) {
    console.log("Hola");
 } else {
    console.log("soy falso");
    }

    /* condicional con variaciones */

edad = 18


    if (edad = 18) {
        console.log("Hey, puedes votar, sera tu primera vez");
     } else if (edad === 18) {
        console.log("puedes votar de nuevo");
     }
     else {
        console.log("no puedes votar");
        }

/* Reto */

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function resultado(user, cpu) {
    if (user === cpu) {
        console.log("empate");
    }
    else if (user === piedra && cpu === tijera || user === tijera && cpu === papel || user === papel && cpu === piedra) {
        console.log("Ganaste");
    }
    else {
        console.log("perdiste");
    }
}

condition ? true : false; 

/* ejemplo */

var numero = 1

var resultado = numero === 1 ? "Si, soy un uno" : "No, no soy un uno"

console.log(resultado);
