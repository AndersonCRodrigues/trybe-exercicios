const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const cars = [palio, shelbyCobra, chiron];

// escreva toObject abaixo

const toObject = (([nome, fabricante, ano]) => ({nome, fabricante, ano}));

const toObject2 = ([palio, shelbyCobra, chiron]) => ({palio, shelbyCobra, chiron});

console.log(toObject(palio));
// console.log(toObject2(cars));