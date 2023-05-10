var estudiantes = ["Maria", "Margarita", "Rosa", "Maryury"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}
for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i])
}