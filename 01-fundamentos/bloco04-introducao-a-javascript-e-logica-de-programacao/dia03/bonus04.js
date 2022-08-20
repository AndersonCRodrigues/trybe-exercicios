//Desenha piramide com asteríscos
let n = 5;
let star = "*";
let desenho = "";
let meio = (n+1)/2


for (let i = 0; i <= meio; i += 1){
    for (let k = 0; k <= n; k += 1){
      if (k > (meio-i) && k < (meio+i)){
        desenho += star;
      } else {
        desenho += " ";
      }
    }
  console.log(desenho);
  desenho = "";
}

