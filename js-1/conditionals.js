function calcularColor(num) {
  let color = "";
    if (num === 1) {
      color = "negro";
    } else if (num === 2) {
      color = "blanco";
    } else if (num === 3) {
      color = "rojo";
    } else {
      color = "verde";
    }
  
    return "El color es " + color;
  }
  
  console.log(calcularColor(1)) // "El color es negro"
  console.log(calcularColor(2)) // "El color es blanco"
  console.log(calcularColor(3)) // "El color es azul"
  console.log(calcularColor(6)) // "El color es verde"