const hydrate = (frase) => {
  const nString = frase.match(/\d+/g);
  let total = 0;
  nString.forEach(valor => total += parseInt(valor, 10));
  return (total < 2 ? `${total} copo de água` : `${total} copos de água`);
};

// console.log(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho'));

module.exports = hydrate;