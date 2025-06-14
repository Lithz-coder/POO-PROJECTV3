// Exercício 3: Leia três números inteiros e mostre o menor (apenas uma vez em caso de empate). 
const prompt = require('prompt-sync')();

const v1 = parseInt(prompt('Primeiro valor: '));
const v2 = parseInt(prompt('Segundo valor: '));
const v3 = parseInt(prompt('Terceiro valor: '));

const menor = Math.min(v1, v2, v3);

console.log(`MENOR = ${menor}`);
