let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = 0;

for (let numero of numbers) {
  if (numero > maior) {
    maior = numero;
  }
}

console.log(maior);