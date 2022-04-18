// const testingScope = (escopo) => {
//   let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//   let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//   const isScope = escopo ? `${ifScope} ótimo, fui utilizada no escopo !` : elseScope;
//   console.log(isScope);
// }

// testingScope(false);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// oddsAndEvens.sort((a, b) => a-b);

// console.log(`Os números ${oddsAndEvens} se econtram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// //parte 2

// const fatorial = (numberTo) => numberTo === 0 ? 1 : numberTo * fatorial(numberTo -1);

// console.log(fatorial(3));

// const longestWord = (string) => {
//   const arrWords = string.split(' ');
//   let atualWord = arrWords[0];
//   for (i = 1; i < arrWords.length; i+=1){
//     atualWord.length < arrWords[i].length ? atualWord = arrWords[i] : atualWord;
//   }
//   console.log(atualWord);
// }

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

const detStr = 'Tryber x aqui!';
const changeStr = (string) => detStr.replace('x', string);

console.log(changeStr('Bebeto'));

const arrEx = ['JavaScript', 'HTML', 'CSS', 'React', 'Python'];

const func2 = (function1) => {
  return `${function1} Minhas cinco principais habilidades são: 
  - ${arrEx.sort()[0]};
  - ${arrEx.sort()[1]};
  - ${arrEx.sort()[2]};
  - ${arrEx.sort()[3]};
  - ${arrEx.sort()[4]};
  #goTrybe`;
}

console.log(func2(changeStr('Bebeto')));