// Exercício 7: Leia 3 distâncias e mostre a maior. 
const prompt = require('prompt-sync')();

console.log('Digite as tres distancias:');
const d1 = parseFloat(prompt());
const d2 = parseFloat(prompt());
const d3 = parseFloat(prompt());

const maior = Math.max(d1, d2, d3);
console.log(`MAIOR DISTANCIA = ${maior.toFixed(2)}`);
