
function bmi (peso, altura) {
    if ( peso <= 0 || altura <= 0) return 0;
    return peso / (altura**2);
}

console.log(bmi(65, 1.8))
console.log(bmi(72, 1.6))
console.log(bmi(52, 1.75))