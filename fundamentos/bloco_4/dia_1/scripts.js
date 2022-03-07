//Constantes
const a = 10;
const b = 20;
const c = 150;

//Programas

//Adição
const soma = a + b;
console.log("Resultado da soma é:", soma);

//Subtração
const subtracao = a - b;
console.log("Resultado da subtração é:", subtracao);

//Multiplicação
const multiplicacao = a * b;
console.log("Resultado da multiplicação é:", multiplicacao);

//Divisão
const divisao = a / b;
console.log("Resultado da divisão é:", divisao);

//Módulo
const resto = a % b;
console.log("Resultado do resto é:", resto);

//Retornar o maior entre dois números
if(a > b == true) {
  console.log(a);
}else {
  console.log(b);
}

//Retornar maior de 3 números
if(a > b == true && a > c == true) {
  console.log("O maior número é:", a);
}else if(b > c == true) {
  console.log("O maior número é:", b);
}else {
  console.log("O maior número é:", c);
}