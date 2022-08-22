function verificaPalindromo (palavra) {
  let temp = [];
  for (let i = 0; i < palavra.length; i += 1){
    temp += palavra[i];
  }
  
  if (palavra === temp){
    return true;
  } else {
    return false;
  }
}

let palavra = "arara";

console.log(verificaPalindromo(palavra));