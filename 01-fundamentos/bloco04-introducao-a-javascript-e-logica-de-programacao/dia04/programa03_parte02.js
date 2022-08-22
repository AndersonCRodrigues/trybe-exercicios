function menor (lista) {
  let palpite = lista[0];
  let index = 0;
  for (let i = 0; i < lista.length; i += 1){
    if (palpite > lista[i]){
      palpite = lista[i];
      index = i;
    }
  }
  return index;
}

let lista = [2, 4, 6, 7, 10, 0, -3];
console.log(menor(lista));