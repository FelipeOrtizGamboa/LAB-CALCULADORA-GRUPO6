// const prompt = require('prompt-sync')();
// let nombre = prompt("¿Cuál es tu nombre? ");
// console.log("Hola, " + nombre + "!");

const prompt = require('prompt-sync')();
let numero1 = Number(prompt("Digita el primer Número "));
let operacion = Number(prompt("Digita el signo "));
let numero2 = Number(prompt("Digita el segundo Número "));
let resultado = numero1 + numero2
console.log(resultado);

