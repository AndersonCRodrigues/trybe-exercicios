function soma (x) {
  sum = x;
  if (sum > 0){
    for (let i = 0; i < x; i += 1){
      sum+= i;
    }
    return sum;
  } else {
    return ("Valor inválido");
  }
}

let n = 5;

console.log(soma(n));