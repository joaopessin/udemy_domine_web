document.write('<h2>Calculadora básica</h2>');

/* Recebendo valores */
var operacao = prompt('Informe uma operação (soma, subtração, multiplicação ou divisão):').toLowerCase();
var primeiroValor = parseFloat(prompt('Digite um número:'));
var segundoValor = parseFloat(prompt('Agora, digite outro número:'));

/* Armazenando operações */
var soma = function(x, y) { return (x + y) }
var subtracao = function(x, y) { return (x - y) }
var multiplicacao = function(x, y) { return (x * y) }
var divisao = function(x, y) { return (x / y) }

function calcular(x, y, calc) {
  switch(calc) {
    case 'soma':
      return soma(x, y);
    case 'subtração':
      return subtracao(x, y)
    case 'multiplicação':
      return multiplicacao(x, y)
    case 'divisão':
      return divisao(x, y)
  }
}

/* Execução do código */
document.write('<p>O resultado da ' + operacao + ' é: <b>' + Math.round(calcular(primeiroValor, segundoValor, operacao)) + '</b></p>');
