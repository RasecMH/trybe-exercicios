// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.

let soma = 0;

for (let index = 50; index <= 100; index++) {
  soma += index;
}
console.log(soma);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.

let contador = 0;

for (let index = 1; index <= 125; index++) {
  if (index % 3 === 0) {
    contador += 1;
  }
}
console.log(contador);

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

const jogador1 = 'tesoura';
const jogador2 = 'tesoura';

if (jogador1 === 'pedra' && jogador2 === 'papel') {
  console.log('jogador1 ganhou!')
}else if(jogador1 === 'tesoura' && jogador2 === 'pedra'){
  console.log('Jogador2 ganhou!');
}else if(jogador1 === jogador2){
  console.log('Empate');
}else {
  console.log('Nenhum comando valido');
}

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.

let maiorIdade = 18;
let idade = 15;

if (idade >= maiorIdade) {
  console.log('Você é maior de idade!');
}else {
  console.log('Você é menor de idade!');
}

// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.

let Marcella = 10;
let Carlos = 5;
let Camila = 2;

if (Marcella < Carlos && Marcella < Camila) {
  console.log('Marcella é a mais nova');
}else if(Carlos < Camila && Carlos < Marcella){
  console.log('Carlos é o mais novo');
}else {
  console.log('Camila é a mais nova');
}