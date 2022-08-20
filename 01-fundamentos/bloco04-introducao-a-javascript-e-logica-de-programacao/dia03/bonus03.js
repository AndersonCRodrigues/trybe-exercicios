//Desenha triangulo contrário com asteríscos
let n = 5;
let star = "*";
let desenho = "";


for (let i = 1; i <= n; i += 1){
  for (let j = 0; j < n; j += 1){
    if (j < (n-i)){
      desenho = desenho + " ";
    } else {
      desenho = desenho + star;
      ;
    }
  }
  console.log(desenho);
  desenho = "";
}
