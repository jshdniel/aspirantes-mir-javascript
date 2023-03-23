let persona = {
    nombre: 'Juan',
    edad: 19,
    ciudad: "Lima",
    profesion: "mecanico",
}

console.log(persona);

function presentacion (persona) {
    return `Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} y soy de la ciuadad de ${persona.ciudad}`;
}

let mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["futbol", "cocinar", "correr", "comer"];

console.log(persona.hobbies);

