let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar","squash","piano"]
}

//Imprime en la consola el valor de la llave edad
console.log(pedro.edad);

//Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8;
console.log(pedro.estatura);

//Elimina la propiedad con llave activo
delete pedro.activo;
console.log(pedro);

//Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :)
for (const [keys, values] of Object.entries(pedro)) {
    console.log(`${keys} : ${values}`)
}

//Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona
pedro.saluda = function () {
    console.log(`hola, me llamo ${this.nombre}`);
}

//Llama la función saluda y verifica el resultado
console.log(pedro.saluda());