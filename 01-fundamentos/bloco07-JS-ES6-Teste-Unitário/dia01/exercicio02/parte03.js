const clickCount = document.getElementById('click-count');
const clickBtn = document.getElementById('click');
let contador = 0;

clickBtn.addEventListener('click', () => {
  contador += 1;
  clickCount.innerText = contador;
});