function maior (lista) {
  let palpite = 0;
  for (let i = 0; i < lista.length; i += 1){
    if (lista[i] > palpite){
    palpite = i;
    }
  }
  return palpite;
}

let lista = [2, 3, 6, 7, 10, 1];
console.log(maior(lista));