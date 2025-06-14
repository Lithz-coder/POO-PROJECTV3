// Exercício 9: Leia código e quantidade, calcule valor a pagar. 
const prompt = require('prompt-sync')();

const tabela = {
  1: 5.00,
  2: 3.50,
  3: 4.80,
  4: 8.90,
  5: 7.32
};

const codigo = parseInt(prompt('Codigo do produto comprado: '));
const qtd = parseInt(prompt('Quantidade comprada: '));

if (tabela[codigo] !== undefined) {
  const total = tabela[codigo] * qtd;
  console.log(`Valor a pagar: R$ ${total.toFixed(2)}`);
} else {
  console.log('Codigo invalido');
}
