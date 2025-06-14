// Exercício 4: Plano de telefone com franquia de 100 min. R$50 + R$2/min extra. Calcule o valor a pagar. 
const prompt = require('prompt-sync')();

const minutos = parseInt(prompt('Digite a quantidade de minutos: '));
const planoBasico = 50;
const franquia = 100;
const custoExtra = 2;

let valor = planoBasico;
if (minutos > franquia) {
  valor += (minutos - franquia) * custoExtra;
}

console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
