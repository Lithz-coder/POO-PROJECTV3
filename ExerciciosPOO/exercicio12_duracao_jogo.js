// Exercício 12: Calcule duração do jogo entre hora inicial e final (mín 1h, máx 24h). 
const prompt = require('prompt-sync')();

const inicio = parseInt(prompt('Hora inicial: '));
const fim = parseInt(prompt('Hora final: '));
let duracao;

if (inicio === fim) {
  duracao = 24;
} else if (fim > inicio) {
  duracao = fim - inicio;
} else {
  duracao = 24 - inicio + fim;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);
