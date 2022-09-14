const btnBackGround = document.querySelector('.background');
const btnTextColor= document.querySelector('.text-color');
const btnFontSize = document.querySelector('.font-size');
const btnLineHeight = document.querySelector('.line-height');
const btnFontFamily = document.querySelector('.font-family');

function menuBG() {
  if (btnBackGround.classList.contains('abreMenu')) {
    btnBackGround.classList.toggle('abreMenu');
    apagaMenuBg();
  }
  else {
    btnBackGround.classList.toggle('abreMenu');
    criaMenuBg();
  }
}

function mudaBG(event) {
  const body = document.querySelector('.body');
  body.style.backgroundColor = event.target.style.backgroundColor;
  localStorage.setItem('backgroundColor', event.target.style.backgroundColor);
}

function criaMenuBg () {
  let arrayColor = ['red', 'blue', 'yellow', 'black', 'green'];
  for (let i = 0; i < arrayColor.length; i += 1){
    let btn = document.createElement('button');
    btn.style.display = 'block';
    btn.style.marginTop = '5px';
    btn.style.width = '70px';
    btn.style.height = '20px';
    btn.classList.add('child');
    btn.style.backgroundColor = `${arrayColor[i]}`;
    btnBackGround.appendChild(btn);
  }

}

function apagaMenuBg() {
  let child = document.querySelector('.child');
  while (child) {
    btnBackGround.removeChild(child);
    child = document.querySelector('.child');
  }
}

btnBackGround.addEventListener('click', menuBG);
btnBackGround.addEventListener('click', mudaBG);

const body = document.querySelector('.body');
let bg = localStorage.getItem('backgroundColor');
body.style.backgroundColor = bg;