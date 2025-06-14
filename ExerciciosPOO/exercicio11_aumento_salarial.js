// Exercício 11: Calcule novo salário conforme faixa salarial. 
const prompt = require('prompt-sync')();

const salario = parseFloat(prompt('Digite o salario da pessoa: '));
let aumentoPerc = 0;

if (salario <= 1000) {
  aumentoPerc = 20;
} else if (salario <= 3000) {
  aumentoPerc = 15;
} else if (salario <= 8000) {
  aumentoPerc = 10;
} else {
  aumentoPerc = 5;
}

const aumento = salario * (aumentoPerc / 100);
const novoSalario = salario + aumento;

console.log(`Novo salario R$ ${novoSalario.toFixed(2)}`);
console.log(`Aumento R$ ${aumento.toFixed(2)}`);
console.log(`Porcentagem = ${aumentoPerc}%`);
