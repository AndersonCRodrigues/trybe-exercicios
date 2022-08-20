//Busca Menor e Maior String
let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = array[0];
let menor = array[0];

for (let i = 0; i < array.length ; i += 1){
  if (menor.length > array[i].length){
    menor = array[i];
  }
  else if (maior.length < array[i].length) {
    maior = array[i];
  }
}

console.log("Menor String é",menor);
console.log("Maior String é",maior);
