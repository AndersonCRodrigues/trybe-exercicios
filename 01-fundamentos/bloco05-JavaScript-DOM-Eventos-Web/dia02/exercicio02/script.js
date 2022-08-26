let pai = document.querySelector('#pai');

let irmao = document.createElement('div');

pai.appendChild(irmao);

let onde = document.querySelector('#elementoOndeVoceEsta');

onde.appendChild(irmao);

let filhoDoPrimeiro = pai.firstElementChild.appendChild(irmao);

filhoDoPrimeiro.parentElement.parentElement.lastElementChild.previousElementSibling;