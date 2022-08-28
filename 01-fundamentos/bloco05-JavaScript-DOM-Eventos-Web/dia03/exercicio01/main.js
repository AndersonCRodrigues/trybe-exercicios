const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function removeTechClass() {
  const item = document.querySelectorAll('.container li');
  for (let i = 0; i < item.length; i += 1){
    item[i].classList.remove('tech');
  }
}

function addClassTech(origem) {
  removeTechClass();
  origem.target.classList.toggle('tech');
}

firstLi.addEventListener('click', addClassTech);
secondLi.addEventListener('click', addClassTech);
thirdLi.addEventListener('click', addClassTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function detectaClass () {
  const item = document.querySelectorAll('.container li');
  for (let i = 0; i < item.length; i += 1){
    let test = item[i].classList.contains('tech');
    if (test) return item[i];
  }
}

function corTech() {
  let alvo = detectaClass();
  alvo.style.backgroundColor = input.value;
}

input.addEventListener("keyup", corTech);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function minhaPagina() {
  window.location.href = 'http://www.google.com.br'
}

myWebpage.addEventListener('dblclick', minhaPagina);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function mudaCor(origem) {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  origem.target.style.color = `rgb(${red}, ${green}, ${blue})`;
}

myWebpage.addEventListener('mouseover', mudaCor);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.