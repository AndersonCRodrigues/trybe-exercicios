const calcIMC = (peso, altura) => (peso/altura * 2).toFixed(2);

const patienteData= ({nome,idade,altura,peso}) => {
  adriana.imc = calcIMC(altura,peso);
  console.log(adriana);
};

const adriana = {
  nome: 'adriana',
  idade: 26,
  altura: 1.55,
  peso: 63
}

patienteData(adriana);