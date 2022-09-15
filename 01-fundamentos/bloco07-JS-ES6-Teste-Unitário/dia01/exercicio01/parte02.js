const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) => {
  return a - b;
});

console.log(`Os Númeors ${oddsAndEvens} se encontram ordenados de forma crescente!`);
