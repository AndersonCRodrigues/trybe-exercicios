let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = 0;

for (let numero of numbers) {
  if ((numero > maior) && (numero % 2 !== 0)) {
    maior = numero;
  }
}

console.log(maior);