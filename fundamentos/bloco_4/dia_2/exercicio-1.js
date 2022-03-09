let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;


// Imprimir os valores contidos no array
console.log('Os valores do array são:');
for (const numeros of numbers) {
  console.log(numeros);
}

// Somar os valores contidos no array
for (let index = 0; index < numbers.length; index++) {
  soma += numbers[index];
}

console.log('A soma de todos os valores é:', soma);

// Média aritmética de todos os valores
let mediaAri = soma / numbers.length;
console.log('A média aritmética é:', mediaAri);

//Caso a média aritmética seja maior que 20 imprimir
if (mediaAri > 20) {
  console.log('Valor acima é maior que 20');
} else {
  console.log('Valor acima é menor que 20');
}

//Verificar o maior valor contido no array
let maiorNumero = numbers[0];
for (let i2 = 1; i2 < numbers.length; i2 += 1) {
  if (maiorNumero < numbers[i2]) {
    maiorNumero = numbers[i2]
  }

}
console.log('O maior número do array é:', maiorNumero)

// Descobrir quantos impares tem no array
let totalImpares = 0;

for (let i3 = 0; i3 < numbers.length; i3 += 1) {
  if (numbers[i3] % 2 != 0) {
    totalImpares += 1;
  }
}

console.log('O total de números impares é:', totalImpares);

// Verificar o menor número
let menorNumero = numbers[0];
for (let i4 = 1; i4 < numbers.length; i4 += 1) {
  if (menorNumero > numbers[i4]) {
    menorNumero = numbers[i4]
  }

}
console.log('O menor número do array é:', menorNumero)

//Criar um array do 1 ao 25 com for
let arrayNumeros = [];

for(let x = 1; x <= 25; x+=1){
  arrayNumeros.push(x);
}
console.log('Novo array contém os seguintes valores:');
console.log(arrayNumeros);