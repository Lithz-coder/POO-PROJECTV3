// Exercício 10: Leia dois inteiros e informe se são múltiplos. 
const prompt = require('prompt-sync')();

console.log('Digite dois numeros inteiros:');
const n1 = parseInt(prompt());
const n2 = parseInt(prompt());

if (n1 % n2 === 0 || n2 % n1 === 0) {
  console.log('Sao multiplos');
} else {
  console.log('Nao sao multiplos');
}
