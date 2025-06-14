// Exercício 6: Classifique o nível de glicose conforme valor informado. 
const prompt = require('prompt-sync')();

const glicose = parseFloat(prompt('Digite a medida da glicose: '));
let classificacao = '';

if (glicose <= 100) {
  classificacao = 'normal';
} else if (glicose <= 140) {
  classificacao = 'elevado';
} else {
  classificacao = 'diabetes';
}

console.log(`Classificacao: ${classificacao}`);
