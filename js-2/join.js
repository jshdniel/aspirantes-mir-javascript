
function join(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result = result + array [i] + " ";
    }
    return result;
}

console.log(join(["Hola", "Mundo"]));
console.log(join(["Make", "It", "Real"]));
console.log(join([]));