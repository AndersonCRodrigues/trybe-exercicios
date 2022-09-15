const fatorial = (n) =>  n > 1 ?  n * (fatorial(n-1)) :  1;

const numero = 2;

console.log(`O fatorial de ${numero } é ${fatorial(numero)}!`);
