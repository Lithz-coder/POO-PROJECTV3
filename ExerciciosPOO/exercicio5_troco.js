// Exercício 5: Calcule troco ou informe quanto falta para pagamento. 
const prompt = require('prompt-sync')();

const preco = parseFloat(prompt('Preço unitário do produto: '));
const qtd = parseInt(prompt('Quantidade comprada: '));
const dinheiro = parseFloat(prompt('Dinheiro recebido: '));

const total = preco * qtd;

if (dinheiro >= total) {
  console.log(`TROCO = ${ (dinheiro - total).toFixed(2) }`);
} else {
  console.log(`DINHEIRO INSUFICIENTE. FALTAM ${(total - dinheiro).toFixed(2)} REAIS`);
}
