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
    console.log("Hola " + miNombre);
}
/* Como el ejemplo anterior lo indica, se inicializa la funcion luego de llamarla */
var a = 20;
var b = a + "";
 console.log(b);
 /* estos ejemplos verificar los tipos de variable con typeof  */

 typeof b

 var c = string(a);

 typeof c

 var d = Number(b);

 typeof d