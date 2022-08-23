function maiorNome (nome) {
  let palpite = nome[0];
  for (let i = 0; i < nome.length; i += 1){
    if (palpite.length < nome.length){
    palpite = nome[i];
    }
  }
  return palpite;
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorNome(nomes));