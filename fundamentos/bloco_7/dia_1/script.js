const testingScope = (escopo) => {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  const isScope = escopo ? `${ifScope} ótimo, fui utilizada no escopo !` : elseScope;
  console.log(isScope);
}

testingScope(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a-b);

console.log(`Os números ${oddsAndEvens} se econtram ordenados de forma crescente!`); // será necessário alterar essa linha 😉



