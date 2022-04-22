const newEmployees = () => {
  const employees = {
    id1: nameEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nameEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nameEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const nameEmail = (nome) => {
  const objReturn = {
    nome: nome,
    email: `${nome.replace(' ', '_').toLowerCase()}@trybe.com`,
  };

  return objReturn;
};

// console.log(newEmployees());

function useless(num, numSort) {
  if (num === numSort) return 'Parabéns você ganhou';
  return 'Tente novamente';
}

const sorteio = (num, callback) => {
  const numSort = Math.floor(Math.random() * 5) + 1;
  console.log(numSort);
  // if(num === numSort) return 'Parabéns você ganhou'
  // return 'Tente novamente'
  return callback(num, numSort);
};

// console.log(sorteio(2, useless));
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyGabaritoUseless = (gabarito, respostas) => {
  let nota = 0;
  respostas.forEach((resp, index) => {
    if(resp === gabarito[index]) return nota += 1;
    if(resp === 'N.A') return nota;
    return nota -= 0.5;

  });
  return nota;
};

const verifyGabarito = (gabarito, respostas, callback) => {
  return callback(gabarito, respostas);
};

console.log(
  verifyGabarito(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyGabaritoUseless)
);
