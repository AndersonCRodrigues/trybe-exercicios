const skills = (newFras) => {
  const mySkill = ['git/Github', 'bash', 'ES6'];
  console.log(`${newFras}
  Minhas três principais skill são:
  ${mySkill[0]}
  ${mySkill[1]}
  ${mySkill[2]}`);
}


const subistituiX = (nome) => {
  const frase = 'Tryber x aqui!';
  const array = frase.split(' ');
  for (let index = 0; index < array.length; index += 1) array[index] === 'x' ? array[index] = nome : null;
  skills(array.join(' '));
}

subistituiX('anderson');