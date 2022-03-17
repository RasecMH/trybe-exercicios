function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let diasList = document.getElementById('days');
console.log(diasList);
function addDiasList(array) {
  for (let i = 0; i < array.length; i += 1) {
    let item = document.createElement('li');
    item.innerText = array[i];
    item.className = 'day';
    if (array[i] === 24 || array[i] === 25 || array[i] === 31) {
      item.className += ' holiday'
    }
    if (array[i] === 4 || array[i] === 11 || array[i] === 18 || array[i] === 25) {
      item.className += ' friday';
    }


    diasList.appendChild(item);
  }
}

addDiasList(dezDaysList);

let btnContainer = document.getElementsByClassName('buttons-container')[0];

function addFeirados(Feriados) {
  let feriadoItem = document.createElement('button');
  feriadoItem.className = 'btn-holiday';
  feriadoItem.innerText = Feriados;

  btnContainer.appendChild(feriadoItem);
}

addFeirados('Feriados');

let btnFeriado = document.getElementsByClassName('btn-holiday');
let feriadoItens = document.getElementsByClassName('holiday');

function btnFeriados() {
  for (i = 0; i < feriadoItens.length; i += 1) {
    if (feriadoItens[i].style.backgroundColor == 'blue') {
      feriadoItens[i].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      feriadoItens[i].style.backgroundColor = 'blue';
    }
  }
}


btnFeriado[0].addEventListener('click', btnFeriados);