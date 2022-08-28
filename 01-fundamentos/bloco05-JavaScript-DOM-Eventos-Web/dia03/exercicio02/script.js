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
  let monthDays = document.querySelector('#days');
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