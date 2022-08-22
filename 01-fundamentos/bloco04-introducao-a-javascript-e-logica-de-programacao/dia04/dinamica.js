let soma = 0;

for (let i = 1; i <= 150; i += 1){
  if (i%3 ===0) {
    soma +=1;
  }
}

if (soma === 50) {
  console.log("Mensagem Secre");
}
console.log(soma);