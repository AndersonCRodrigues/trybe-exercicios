let ondeVoceEsta =  document.querySelector('#elementoOndeVoceEsta');

let pai = ondeVoceEsta.parentElement;

pai.style.color = 'red';

let primeiroFilho = pai.firstElementChild;

primeiroFilho.innerText = 'Texto do Primerio Filho';

primeiroFilho = ondeVoceEsta.parentElement.firstElementChild;

let Texto = ondeVoceEsta.nextSibling;

let terceiroFilho = ondeVoceEsta.nextElementSibling;

pai = terceiroFilho.parentElement;