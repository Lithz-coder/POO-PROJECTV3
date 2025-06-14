// Exercício 13: Leia coordenadas (X,Y) e informe o quadrante ou situação. 
const prompt = require('prompt-sync')();

const x = parseFloat(prompt('Valor de X: '));
const y = parseFloat(prompt('Valor de Y: '));

if (x === 0 && y === 0) {
  console.log('Origem');
} else if (x === 0) {
  console.log('Eixo Y');
} else if (y === 0) {
  console.log('Eixo X');
} else if (x > 0 && y > 0) {
  console.log('Q1');
} else if (x < 0 && y > 0) {
  console.log('Q2');
} else if (x < 0 && y < 0) {
  console.log('Q3');
} else if (x > 0 && y < 0) {
  console.log('Q4');
}
