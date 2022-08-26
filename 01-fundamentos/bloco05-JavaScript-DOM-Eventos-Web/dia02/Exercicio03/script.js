// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

let onde = document.querySelector('#elementoOndeVoceEsta');
let pai = onde.parentElement;

let ultmoFilhoOnde = onde.lastElementChild;

onde.removeChild(ultmoFilhoOnde);

let primeiroFilhoPai = pai.firstElementChild;

pai.removeChild(primeiroFilhoPai);

for (let i = 0; i < 2; i += 1) {
  let ultimo = pai.lastElementChild;
  pai.removeChild(ultimo);
}
