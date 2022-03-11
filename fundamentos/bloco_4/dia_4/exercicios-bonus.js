//retornar valor numero de um valor em romano

let romanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}



function retornarNumero(n){
  let valorTotal = romanos[n[n.length - 1]];
  let numeroAtual = romanos[n[n.length -1]];

  for (let i = n.length - 1; i > 0; i -= 1){
    let verificador = romanos[n[i - 1]];
    if(numeroAtual <= verificador){
      valorTotal += verificador;
    }else{
      valorTotal -= verificador
    }
    numeroAtual = verificador;
  }
  return valorTotal;
}

console.log(retornarNumero('MMXXII'));

