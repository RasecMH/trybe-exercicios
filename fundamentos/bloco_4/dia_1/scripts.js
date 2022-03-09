//Constantes
const a = 2;
const b = 4;
const c = 6;
const d = 0;
const resultadoTriangulo = 180;
const peca = "Principe";
const valor = 54;
const valorVenda = 87;
const valorCustoTotal = valor + (valor * 0.20);
const lucro = valorVenda - valorCustoTotal;
const quantidadeProdutos = 1000;


//Programas
/*Operadores Básicos
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
*/

/*//Retornar o maior entre dois números
if(a > b == true) {
  console.log(a);
}else {
  console.log(b);
}
*/

/*//Retornar maior de 3 números
if(a > b == true && a > c == true) {
  console.log("O maior número é:", a);
}else if(b > c == true) {
  console.log("O maior número é:", b);
}else {
  console.log("O maior número é:", c);
}
*/

/*//Positive, negative e zero
if(d > 0){
  console.log(d, "is positive");
}else if(d < 0){
  console.log(d, "is negative");
}else{
  console.log(d, 'is zero');
}
*/

/*//Verificar se é triângulo
if(a + b + c == resultadoTriangulo && a > 0 && b > 0 && c > 0) {
  console.log("É um triangulo");
}else if(a < 0 || b < 0 || c < 0){
  console.log("Um dos valores está negativo");
}else {
  console.log("Não é um triangulo");
}

*/

/*//Peça de xadrez

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
*/

/*//Conversor de notas
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
*/

/*//Verificar se existe algum par.
if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
  console.log("Um dos números é par");
}else{
  console.log("Nenhum dos números é par");
}
*/

/*//Verificar se existe algum impar.
if(a % 2 > 0 || b % 2 > 0 || c % 2 > 0){
  console.log("Um dos números é impar");
}else{
  console.log("Nenhum dos números é impar");
}
*/

/*//Calcular lucro de produtos
console.log("O lucro da venda será de:", lucro * quantidadeProdutos);
*/

//Calculo de salário bruto

let aliquotaInss;
let aliquotaIr;
let salarioBruto = 3000.00;

if(salarioBruto <= 1556.94){
  aliquotaInss = salarioBruto * 0.08;
}else if(salarioBruto <= 2594.92){
  aliquotaInss = salarioBruto * 0.09;
}else if(salarioBruto <= 5189.82){
  aliquotaInss = salarioBruto * 0.11;
}else{
  aliquotaInss = 570.88;
}

const salarioBase = salarioBruto - aliquotaInss;

if(salarioBase <= 1903.98){
  aliquotaIr = 0;
}else if(salarioBase <= 2826.65){
  aliquotaIr = (salarioBase * 0.075) - 142.80;
}else if(salarioBase <= 3751.05){
  aliquotaIr = (salarioBase * 0.15) - 354.80;
}else if(salarioBase <= 4664.68){
  aliquotaIr = (salarioBase * 0.225) - 636.13
}else{
  aliquotaIr = (salarioBase * 0.275) - 869.36;
}

const salarioLiquido = salarioBase - aliquotaIr;

console.log(salarioLiquido);