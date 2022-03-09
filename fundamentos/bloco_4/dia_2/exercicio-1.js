let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;


// Imprimir os valores contidos no array
for (const numeros of numbers) {
  console.log(numeros);
}

// Somar os valores contidos no array
for (let index = 0; index < numbers.length; index++) {
  soma += numbers[index];
}

console.log(soma);

// Média aritmética de todos os valores
let mediaAri = soma / numbers.length;
console.log(mediaAri);

//Caso a média aritmética seja maior que 20 imprimir
if (mediaAri > 20) {
  console.log('Valor maior que 20');
}else {
  console.log('Valor menor que 20');
}

//Verificar o maior valor contido no array
let maiorNumero = numbers[0];
for (let i2 = 1; i2 < numbers.length; i2+=1) {
  if(maiorNumero < numbers[i2]){
    maiorNumero = numbers[i2]
  }
  
}
console.log(maiorNumero)