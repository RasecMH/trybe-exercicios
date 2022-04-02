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

function addFridays(friday) {
  let fridayItem = document.createElement('button');
  fridayItem.className = 'btn-friday';
  fridayItem.innerText = friday;

  btnContainer.appendChild(fridayItem);
}

addFridays('Sexta-feira');

let btnFriday = document.getElementsByClassName('btn-friday');
console.log(btnFriday);
let fridayItens = document.getElementsByClassName('friday');
let arrayFriday = [4,11,18,25];
function btnFridays() {
  for (i = 0; i < fridayItens.length; i += 1) {
    if (fridayItens[i].innerText !== 'Sextou!') {
      fridayItens[i].innerText = 'Sextou!';
    } else {
      fridayItens[i].innerText = arrayFriday[i];
    }
  }
}


btnFriday[0].addEventListener('click', btnFridays);

let dayItem = document.getElementsByClassName('day');

function zoomIn(event) {
  event.target.style.fontSize = '30px'
}

function zoomOut(event) {
  event.target.style.fontSize = '20px'
}

for (i = 0; i < dayItem.length; i += 1) {
  dayItem[i].addEventListener('mouseover', zoomIn);
  dayItem[i].addEventListener('mouseout', zoomOut);
}


let tarefas = document.getElementsByClassName('my-tasks')[0];

function addTarefa(String, Cor){
  let novaTarefa = document.createElement('span');
  novaTarefa.innerText = String;
  tarefas.appendChild(novaTarefa);

  let novaLegenda = document.createElement('div');
  novaLegenda.className = 'task';
  novaLegenda.style.backgroundColor = Cor;
  tarefas.appendChild(novaLegenda);
  
}

addTarefa('Estudar', 'red');
addTarefa('Trabalhar', 'blue');

let taskSelected = document.getElementsByClassName('task');

function selecionarTask(Event){
  let taskAtual = document.getElementsByClassName('task selected');
  if(taskAtual.length === 0){
    Event.target.className = 'task selected';
  }else {
    Event.target.className = 'task';
  }
  
}

for(i = 0; i < taskSelected.length; i += 1){
  taskSelected[i].addEventListener('click', selecionarTask);
}

function legendaSelecionada(Event){
  let taskSelec = document.getElementsByClassName('task selected')[0];
  if(Event.target.style.color === taskSelec.style.backgroundColor){
    Event.target.style.color = 'rgb(119,119,119)';
  }else{
    Event.target.style.color = taskSelec.style.backgroundColor;
  }
  
}

for (i = 0; i < dayItem.length; i += 1) {
  dayItem[i].addEventListener('click', legendaSelecionada);
}

let btnAdd = document.getElementById('btn-add');
let input = document.getElementById('task-input');
let listTask = document.getElementsByClassName('task-list')[0];


function addCompromissoClick(){
  addCompromisso();
  function addCompromisso(){
    if(input.value.length <= 0){
      alert('Error: Digite ao menos 1 caractere')
    }
    let inputText = document.createElement('li');
    inputText.innerText = input.value; 

    listTask.appendChild(inputText);
    input.value = '';
    
  }
}


  function addCompromisso(Event){
    if(Event.key === 'Enter'){
      if(input.value.length <= 0){
        alert('Error: Digite ao menos 1 caractere')
      }
    let inputText = document.createElement('li');
    inputText.innerText = input.value; 

    listTask.appendChild(inputText);
    input.value = '';
    
    }
  }


btnAdd.addEventListener('click', addCompromissoClick);
input.addEventListener('keyup', addCompromisso);