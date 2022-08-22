function moda (lista){
  let auxiliar =[];

  for (let i = 0; i < lista.length; i += 1){
    auxiliar[i] = 1;
    for (let varre = 1; varre < lista.length; varre += 1){
      if (lista[varre] === lista[i]){
        auxiliar[i] += 1;
      }
    }
  }
  let onde = 0;

  for (let i = 0; i < auxiliar.length; i += 1) {
    if (auxiliar[i] > auxiliar[onde]) {
      onde = i;
    }
  }
  return lista[onde];
}


let valores = [2, 3, 2, 5, 8, 2, 3];

console.log(moda(valores));