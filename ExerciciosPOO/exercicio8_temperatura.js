// Exercício 8: Converta temperatura entre Celsius e Fahrenheit. 
const prompt = require('prompt-sync')();

const escala = prompt('Voce vai digitar a temperatura em qual escala (C/F)? ').toUpperCase();

if (escala === 'C') {
  const c = parseFloat(prompt('Digite a temperatura em Celsius: '));
  const f = c * 9/5 + 32;
  console.log(`Temperatura equivalente em Fahrenheit: ${f.toFixed(2)}`);
} else if (escala === 'F') {
  const f = parseFloat(prompt('Digite a temperatura em Fahrenheit: '));
  const c = (f - 32) * 5/9;
  console.log(`Temperatura equivalente em Celsius: ${c.toFixed(2)}`);
} else {
  console.log('Escala invalida');
}
