//Busca Maior número primo entre 1 a 50
let contador = 0;
let maior = 0;
let numero = 50;

for (let i = 1; i <= numero; i += 1){
  contador = 0;
  for (let j = 1; j <= i; j += 1){
    if (i%j === 0){
      contador += 1;
    }
  }
  if (contador === 2){
    maior = i;
  }
}

console.log("Ente 1 e",numero,"o maior primo é",maior);