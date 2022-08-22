function maior (lista) {
  let index = 0;
  let palpite = lista[0];
  for (let i = 0; i < lista.length; i += 1){
    if (lista[i] > palpite){
      palpite = lista[i];
      index = i;
    }
  }
  return index;
}

let lista = [2, 3, 6, 7, 10, 1];
console.log(maior(lista));