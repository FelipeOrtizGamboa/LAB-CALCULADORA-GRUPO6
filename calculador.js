// const prompt = require('prompt-sync')();
// let nombre = prompt("¿Cuál es tu nombre? ");
// console.log("Hola, " + nombre + "!");

const prompt = require("prompt-sync")();

const numero1 = Number(prompt("Ingresa el primer número: "));
const operacion = prompt("Elige la operación (+, -, *, /): ");
const numero2 = Number(prompt("Ingresa el segundo número: "));

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
    resultado = "Operación no válida.";
}
console.log("Resultado:", resultado);
