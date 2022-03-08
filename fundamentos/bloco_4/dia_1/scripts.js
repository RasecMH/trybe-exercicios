//Constantes
const a = 90;
const b = -10;
const c = 150;
const d = 0;
const resultadoTriangulo = 180;
const peca = "Principe";

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

//Positive, negative e zero
if(d > 0){
  console.log(d, "is positive");
}else if(d < 0){
  console.log(d, "is negative");
}else{
  console.log(d, 'is zero');
}

//Verificar se é triângulo
if(a + b + c == resultadoTriangulo && a > 0 && b > 0 && c > 0) {
  console.log("É um triangulo");
}else if(a < 0 || b < 0 || c < 0){
  console.log("Um dos valores está negativo");
}else {
  console.log("Não é um triangulo");
}

//Peça de xadrez

switch (peca.toLowerCase()) {
  case "peão":
    console.log("Move uma para frente");
    break;
  case "torre":
    console.log("Move para frente e para os lados");
    break;
  case "rainha":
    console.log("Move para todas as direções");
    break;
    default:
      console.log(peca[0].toUpperCase() + peca.slice(1).toLowerCase(), "não é uma peça de xadrez!");
}

//Conversor de notas
if(a >= 90 && a <= 100) {
  console.log("Nota A");
}else if(a >= 80 && a < 90){
  console.log("Nota B");
}else if(a >= 70 && a < 80){
  console.log("Nota C");
}else if(a >= 60 && a < 70){
  console.log("Nota D");
}else if(a >= 50 && a < 60){
  console.log("Nota E");
}else if(a > 100 || a < 0){
  console.log("Nota incorreta")
}else {
  console.log("Nota F");
}