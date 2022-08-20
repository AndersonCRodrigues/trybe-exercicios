//Definir se um número é primo ou não
let numero = 499;
let contador = 0;

for (let i = 0; i <= numero; i += 1 ){
  if (numero%i === 0){
    contador += 1;
  }
}

if (contador === 2) {
  console.log(numero,"é primo");
} else {
  console.log(numero,"não é primo");
}
