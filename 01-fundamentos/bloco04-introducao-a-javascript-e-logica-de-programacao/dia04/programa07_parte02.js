function testa (inicio,fim) {
  let contador = 0;
  for (let i = 0; i < fim.length; i += 1){
    if (inicio[inicio.length-fim.length+i] === fim[i]){
      contador += 1;
    }
  }
  if (contador === fim.length){
    return true;
  } else {
    return false;
  }
}

let palavra = "trybe";
let parte = "be";

console.log(testa(palavra,parte));