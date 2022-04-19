const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addLesson(obj, key, value) {
  return obj[key] = value;
}

addLesson(lesson2, 'turno', 'noite');
// console.log(lesson2);

function showKeys(obj) {
  return Object.keys(obj);
}

// console.log(showKeys(lesson2));

function objLength(obj){
  return Object.keys(obj).length;
}

// console.log(objLength(lesson2));

function showValue(obj) {
  return Object.values(obj);
}

// console.log(showValue(lesson2));

const allLessons = {lesson1: Object.assign({}, lesson1), lesson2: Object.assign({}, lesson2), lesson3: Object.assign({}, lesson3)};


// console.log(allLessons);

function totalStudents(obj){
  return obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
}

// console.log(totalStudents(allLessons));

function getValueByIndex(obj, index){
  return obj[showKeys(obj)[index]];
}

// console.log(getValueByIndex(lesson1, 0));

function isEntrie(obj, key, value){
  if(obj[key] === value){
    return true
  }
  return false;
}

// console.log(isEntrie(lesson3, 'turno', 'noite'));
// console.log(isEntrie(lesson3, 'materia', 'Maria Clara'));

function totalMateria(obj, value){
  let total = 0;
  for(let i = 1; i <= 3; i+=1){
    if(obj[`lesson${i}`].materia === value){
      total += obj[`lesson${i}`].numeroEstudantes;
    }
  }
  return total;
}

console.log(totalMateria(allLessons, 'Matemática'));

function report(obj, name){
  const reportExit = {professor: name, aulas: [], estudantes: 0,};
  for(let i = 1; i <= 3; i+=1){
    const lessonAtual = obj[`lesson${i}`];
    if(lessonAtual.professor === name){
      reportExit.aulas.push(lessonAtual.materia);
      reportExit.estudantes = totalMateria(obj, lessonAtual.materia);
    }
  }
  return reportExit;
}

console.log(report(allLessons, 'Maria Clara'));