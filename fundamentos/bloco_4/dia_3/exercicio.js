//Fatorial

//Declarar variável do valor inicial
//Criar um laço para percorrer a variavel e multiplicar
//Console.log para retornar o valor final

let valorFinal = 1;

for(let i = 1; i < 11; i+=1){
  valorFinal *= i;
}

console.log(valorFinal);


//inverter letras

//Declarar a váriavel com a palavra
//Declarar a váriavel que vai receber a palavra invertida
//Criar laço que passe pelas letras da string
//Criar push que insira a ultima letra na primeira posição
//Imprimir resultado

let word = 'tryber';
let invertido = '';

for (i2 = word.length - 1; i2 >= 0; i2-=1) {
  invertido += word[i2];
  
}
console.log(invertido);

//Imprimir a menor e maior palavra

//Declarar varial de maior palavra
//Declarar variavel de menor palavra
//Laço de repetição que caminhe na array
//Condição que determine quem é o maior e menor

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for(let i3 = 1; i3 < array.length; i3+=1){
  if(maiorPalavra.length < array[i3].length){
    maiorPalavra = array[i3];
  }
  if(menorPalavra.length > array[i3].length){
    menorPalavra = array[i3];
  }
}

console.log('A maior palavra é:', maiorPalavra);
console.log('A menor palavra é:', menorPalavra);

//Retornar o maior número primo entre 0 e 50
//Declarar variavel array que vai conter os números primos
//Criar laço de repetição que corra e multiplique dos numero 1 e 50 por 1 e por ele mesmo
//Criar laço de repetição que corra o novo array e mostre o maior número dentro dele

let maiorPrimo = 0;

for(let na = 0; na <= 50; na+=1){
  let primo = true;
  for (let nd = 2; nd < na; nd+=1){
    if(na % nd === 0){
      primo = false;
    }
  }
  if (primo){
    maiorPrimo = na;
  }
}

console.log('O maior número primo é:', maiorPrimo);

//Bonus
let n = 7;
let asterisco = '*';
let espacos = '';

let meio = (n + 1) / 2;
let direita = meio;
let esquerda = meio;

// for(let q = 0; q < n; q+=1){
//   console.log(asterisco.repeat(n));
// }

// for(let q = n; q >= 0; q-=1){
//   console.log(asterisco.repeat(n - q));
// }

// for(let q = n; q >= 0; q-=1){
//   console.log(espacos.repeat(q) + asterisco.repeat(n - q));
// }

// for(let li = 0; li <= meio; li += 1){
//   for(let ci = 0; ci <= n; ci += 1){
//     if(ci > esquerda && ci < direita){
//       espacos = espacos + asterisco;
//     }else {
//       espacos = espacos + ' ';
//     }
//   }
//   console.log(espacos);
//   espacos = '';
//   direita += 1;
//   esquerda -= 1;
// }

for(let li = 1; li <= meio; li += 1){
  
  for(let ci = 1; ci <= n; ci += 1){
    if(ci == esquerda || ci == direita || li == meio){
      espacos += asterisco;
    }else {
      espacos += ' ';
    }
  }

  console.log(espacos);
  espacos = '';
  direita += 1;
  esquerda -= 1;
  
}

//Checador de número primo
let divisor = 1;
let numero = 48;

for(let check = 2; check <= numero; check+=1){
  if(numero % check === 0){
    divisor += 1;
  }
}

if (divisor === 2){
  console.log(numero, 'é um número primo!');
}else {
  console.log(numero, 'não é um número primo');
}




