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
//Desafio 01
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
preencheDias(decemberDaysList);

function preencheDias(days) {
  const monthDays = document.querySelector('#days');
  for (let i = 0; i < days.length; i += 1) {
    let daysList = document.createElement('li');
    daysList.innerText = days[i];
    daysList.classList.add('day')
    if (days[i] === 24 || days[i] === 25 || days[i] === 31) {
      daysList.classList.add('holiday'); }
    if (days[i] === 4 || days[i] === 11 || days[i] === 18 || days[i] === 25) {
      daysList.classList.add('friday'); }
    monthDays.appendChild(daysList);
  }
}

//Desafio 02
function addHoliDayButton() {
  const buttonsContainer = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.id = "btn-holiday";
  btn.innerText = 'Feriado';
  buttonsContainer.appendChild(btn);
  return btn;
}

let btnHoliday = addHoliDayButton();

//Desafio 03
function changeColorHoliDay() {
  const holiDays = document.querySelectorAll('.holiday')
  for (let i = 0; i < holiDays.length; i += 1) {
    if (holiDays[i].style.background === 'white') {
    holiDays[i].style.background = 'rgb(238,238,238)';
    } else {
      holiDays[i].style.background = 'white';
    }
  }
}

btnHoliday.addEventListener('click', changeColorHoliDay);

//Desafio 04
function addFridayButton() {
  const buttonsContainer = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.id = "btn-friday";
  btn.innerText = 'Sexta-feira';
  buttonsContainer.appendChild(btn);
  return btn;
}

let btnFriday = addFridayButton();

//Desafio 05
function changeName() {
const fridays = document.querySelectorAll('.friday');
let diaCerto = 4;
  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].innerText === 'Sextou') {
      fridays[i].innerText = diaCerto;
      diaCerto += 7;
    } else {
      fridays[i].innerText = 'Sextou';
    }
  }
}

btnFriday.addEventListener('click', changeName);

//Desafio 06
function mouseOverDays(origin){
  origin.target.style.fontSize = '25px';
}

function mouseOutDays(origin) {
  origin.target.style.fontSize = '20px';
}


const monthDays = document.querySelector('#days');
monthDays.addEventListener('mouseover', mouseOverDays);
monthDays.addEventListener('mouseout', mouseOutDays);

//Desafio 07
function addTasks(task) {
  const myTasks = document.querySelector('.my-tasks');
  const text = document.createElement('span');
  text.innerText = task;
  myTasks.appendChild(text);
}

addTasks('Projeto:');

//Desafio 08
function fontColor(cor) {
  const myTasks = document.querySelector('.my-tasks');
  const div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = `${cor}`;
  myTasks.appendChild(div);
}
fontColor('red')

//Desafio 09
function selectTask() {
  task.classList.toggle('selected');
}

const task = document.querySelector('.task');
task.addEventListener('click', selectTask);

//Desafio 10
function selectDay(origin) {
  const task = document.querySelector('.task');
  const taskColor = task.style.backgroundColor;
  if (task.classList.contains('selected')){
    if (origin.target.style.color !== taskColor) {
      origin.target.style.color = taskColor;
    } else {
      origin.target.style.color = 'rgb(119,119,119)';
    }
  }
}

monthDays.addEventListener('click', selectDay);

//Desafio Bônus
function addCompromisso() {
  const listTask = document.querySelector('.task-list');
  const itemListTask = document.createElement('li');
  if (taskInput.value === '') {
    alert('erro ao clicar em "ADICIONAR".');
  } else {
    itemListTask.innerText = taskInput.value;
    listTask.appendChild(itemListTask);
    taskInput.value = '';
  }
}

function identificaTecla(tecla) {
  if (tecla.key === 'Enter') alert('erro ao clicar em "ADICIONAR".');
}

const taskInput = document.querySelector('#task-input');
taskInput.addEventListener('change', addCompromisso);

taskInput.addEventListener('keyup', identificaTecla);