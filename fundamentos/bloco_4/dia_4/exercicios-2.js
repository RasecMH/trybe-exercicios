
/*
//verificar palíndromo


function verificaPalindrome(palavra){
  let palindrome;
  let palavraReversa = '';
  for(i = palavra.length - 1; i >= 0; i -= 1){
    palavraReversa += palavra[i]
  }
  if(palavraReversa == palavra){
    palindrome = true;
  }else{
    palindrome = false;
  }

  return palindrome;
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));
console.log(verificaPalindrome('arara'));


//Retornar a posição do maior valor

  
function retornarPosicao(array){
  let maiorValor = array[0];
  for(i = 1; i < array.length; i += 1){
    if(maiorValor < array[i]){
      maiorValor = array[i];
    }
    for(x = 0; x < array.length; x += 1){
      if(array[x] == maiorValor){
        maiorValor = x;
      }
    }
  }
  return maiorValor;
}

console.log(retornarPosicao([2, 3, 6, 7, 10, 1]));



//Retornar a posição do menor valor
function retornarPosicao2(array){
  let menorValor = array[0];
  for(i = 1; i < array.length; i += 1){
    if(menorValor > array[i]){
      menorValor = array[i];
    }
    for(x = 0; x < array.length; x += 1){
      if(array[x] == menorValor){
        menorValor = x;
      }
    }
  }
  return menorValor;
}

console.log(retornarPosicao2([2, 4, 6, 7, 10, 0, -3]));

//Retornar nome com maior numero de caracteres

function retornarMaiorNome(array){
  let maiorNome = array[0]
  for(i = 1; i < array.length; i+=1){
    if(maiorNome.length < array[i].length){
      maiorNome = array[i];
    }
  }

  return maiorNome;
}

console.log(retornarMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//Retornar o numero que mais se repete

function retornarMaisRepetido(array){
  
  let maisRepetido = 0;

  for(i in array){
    let contador = 0;
    for(i2 in array){
      if(array[i2] == array[i]){
        contador += 1;
      }
    }
    if(contador > maisRepetido){
      maisRepetido = array[i];
    }
  }

  return maisRepetido;
}

console.log(retornarMaisRepetido([2, 3, 2, 5, 8, 2, 3]));
*/

//Somatoria de um numero em sequencia
// function somatoria(n){
//   let totalSoma = 0;

//   for(i = 0; i <= n; i+= 1){
//     totalSoma += i;
//   }

//   return totalSoma;
// }

// console.log(somatoria(5));


//verificar se final bate

function finalIgual(word, end){
  let contador = 0;
  let igual = false;
  for(i = word.length - end.length; i <= word.length; i+=1){
    
    for(i2 = 1; i2 <= end.length; i2+=1){
      if(end[i2] == word[i]){
        contador += 1;
      }
    }
    if(contador == end.length){
      igual = true;
    }else{
      igual = false;
    }
  }

  return igual;
}

console.log(finalIgual('trybe', 'be'));
console.log(finalIgual('joaofernando', 'fernan'));
console.log(finalIgual('cesar', 'sar'));



