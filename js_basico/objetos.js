var objeto = {}; /* asi se declara un objeto */

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};
/* para acceder  a los valores de los objetos   */

variable.palabraClave

/* ejemplo */

miAuto.marca

/* igualmente se pueden agregar funciones como propiedades del objeto. Ejemplo */

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);     /* el "this" hace referencia al objeto en cuestion (a su padre) */
    }
}
miAuto.detalleDelAuto();   /* asi se llama la funcion */
