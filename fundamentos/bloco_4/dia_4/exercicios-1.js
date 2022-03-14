/*
let info = {
  margarida: {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  },
  tioPatinhas: {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  }
};

//Imprimir mensagem de boas-vindas
console.log('Bem-vinda, ' + info.margarida.personagem);

//Adicionar nova chave ao objeto
info.margarida.recorrente = 'Sim';
console.log(info);

//for/in no objeto
for (index in info) {
  console.log(index);
}

//for/in para mostrar as chaves do objeto
for (i in info) {
  console.log(info[i]);
}

//Novo objeto
for(x in info.margarida){
  if(info.margarida[x] === info.tioPatinhas[x]){
    info.margarida.recorrente = 'Ambos recorrentes';
    info.tioPatinhas.recorrente = '';
  console.log(info.margarida[x]);
  }else {
  console.log(info.margarida[x] + ' e ' + info.tioPatinhas[x]);
  }
}

*/
//Parte 2
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//Imprimir frase 1
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0]['titulo']+ '"');

//Adicionar novo livro
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})

//Imprimir quantidade de livros favoritos
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');
