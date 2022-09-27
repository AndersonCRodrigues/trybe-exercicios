const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA() {
  // escreva seu código aqui
  let contaLetra = 0;
  names.forEach(word => {
    contaLetra += word.split('')
    .reduce((acc, act) => (act === 'a' || act === 'A' ? acc + 1: acc),0);
  });
  return contaLetra;
};

console.log(containsA());