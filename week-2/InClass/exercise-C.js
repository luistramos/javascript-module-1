function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`; // Mensaje, si el valor es mayor a 20
  } else if (num === 20) {
    return `${num} is equal to 20`; // Mensaje, si el valor es igual a 20
  } else if (num < 20) {
    return `${num} is less than 20`; // Mensaje, si el valor es menor a 20
  } else {
    return `${num} isn't even a number :(`; // Mensaje, si el valor no es un numero
  }
}
console.log(numberChecker("21"))