//Desenha piramide vazia com asteríscos
let n = 54;
let star = "*";
let desenho = "";
let meio = 0;

//Determina que só pode ser número impar
if (n%2!==0){
  meio = (n+1)/2
} else {
  meio = n/2
}

//Desenha piramide
for (let i = 0; i <= meio; i += 1){
    for (let k = 1; k <= n; k += 1){
      if (k === (meio-i) || k === (meio+i) || i === meio){
        desenho += star;
      } else {
        desenho += " ";
      }
    }
  console.log(desenho);
  desenho = "";
}