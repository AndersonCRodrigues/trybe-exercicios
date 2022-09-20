const techList = (array, nome) => {
  if (!array.length) return 'Vazio!';
  array = array.sort();
  const obj = [];
  array.forEach(element => {
    obj.push({
      tech: element,
      name: nome
    })
  });
  return obj;
};

module.exports = techList;