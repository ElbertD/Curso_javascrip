var numero = 1;

switch (numero) {
    case 1: 
        console.log("soy un uno!");
        break;
    case 10:
        console.log("soy un diez!");
        break;
    case 100:
        console.log("soy un cien!");
        break;
    default:
        console.log("no soy nada");
}

/* reto: juego piedra, papel o tijera con la funcion switch */

var piedra = "piedra"
var papel = "papel"
var tijera = "tijera"

function resultado(user,cpu) {
    switch(true) {
        case user === cpu:
            console.log("Empate");
        break;
        case user === piedra && cpu === tijera || user === tijera && cpu === papel || user === papel && cpu === piedra:
            console.log("Ganaste");
        break;
        default:
            console.log("perdiste");
    }
}
resultado(papel,tijera)