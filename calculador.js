// const prompt = require('prompt-sync')();
// let nombre = prompt("¿Cuál es tu nombre? ");
// console.log("Hola, " + nombre + "!");

const prompt = require("prompt-sync")();

let opcion = prompt("¿Deseas utilizar la calculadora? (s/n): ");

while (opcion !== "n") {
  if (opcion === "s") {
    const numero1 = Number(prompt("Ingresa el primer número: "));
    const numero2 = Number(prompt("Ingresa el segundo número: "));
    const operacion = prompt("Elige la operación a realizar (+, -, *, /): ");

    let resultado;

    if (operacion === "+") {
      resultado = numero1 + numero2;
    } else if (operacion === "-") {
      resultado = numero1 - numero2;
    } else if (operacion === "*") {
      resultado = numero1 * numero2;
    } else if (operacion === "/") {
      resultado = numero1 / numero2;
    } else {
      resultado = "Operación no válida, ingresa otra operación";
    }

    console.log("El resultado es:", resultado);
    opcion = prompt("¿Deseas hacer otra operación? (s/n): ");
  } else {
    opcion = prompt("La respuesta no es válida. Escriba s o n: ");
  }
}


