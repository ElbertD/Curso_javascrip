var miNombre; /* declarar variable */
miNombre = "Elbert"; /* inicializar una variable (ocurre al momento de agregarle un valor a la variable) */
var miNombre = "Elbert"; /* variable declarada e inicializada */
/* El hosting ocurre en el momento que usas variables sin haberlas declarado */
/* ejemplo */
console.log(miNombre);

var miNombre = "Elbert";
/* hosting ocurre en funciones por las mismas razones explicadas*/
/* ejemplo */

hey ();

function hey() {
    console.log("Hola " miNombre);
}
/* Como el ejemplo anterior lo indica, se inicializa la funcion luego de llamarla */