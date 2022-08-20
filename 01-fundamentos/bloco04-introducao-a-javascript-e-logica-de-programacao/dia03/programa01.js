//calcula fatorial

let produto = 1;
let fat = 10;


for (let i = fat; i > 0; i -= 1) {
  produto *= i;
}

console.log(produto);