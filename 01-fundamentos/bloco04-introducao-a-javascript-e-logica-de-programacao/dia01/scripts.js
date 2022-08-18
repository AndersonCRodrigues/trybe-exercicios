const a = 5;
const b = 3;
const c = 7;
let operacao = null;

operacao = "+";

//programa 01

switch (operacao) {
  case "+":
    console.log(a+b);
    break;
    case "-":
    console.log(a-b);
    break;
    case "*":
    console.log(a*b);
    break;
    case "/":
    console.log(a/b);
    break;
    case "%":
    console.log(a%b);
    break;
    default:
      console.log("Operação Inválida")
}

// programa 02

if (a > b) {

  console.log(a + " maior que " + b);

}

else {
  console.log(b + " maior que " + a);
}

//programa 03

if (a>b && a>c) {
  console.log(a + " é maior que " + b + " e " + c);
}
else if (b>a && b>c) {
    console.log(b + " é maior que " + a + " e " + c);
}

else {
  console.log(c + " é maior que " + a + " e " + b);
}

//programa 04

if (a>0) {
  console.log(a + " é positivo");
}
else if (a<0) {
    console.log(a + " é negativo ");
}

else {
  console.log(a + " é nulo");
}

//programa 05

let x = 90;
let y = 45;
let z = 45;
let triangulo = true;

if ((x>0) && (y>0) && (z>0) && ((x+y+z)===180) ) {
  console.log(triangulo);
}
else if ((x>0) && (y>0) && (z>0) && ((x+y+z)!==180)){
  console.log(!triangulo);
}
else {
  console.log("entrada de angulos inválidos");
}

//programa 06

let peca = "RAINHA";
let result = peca.toLocaleLowerCase();

switch (result) {
  case "peao":
    console.log("Peão -> vertical ou diagonal");
    break;

  case "torre":
    console.log("Torre -> vertical ou horizontal");
    break;

  case "cavalo":
    console.log("Cavalo -> dois horizontais e um vertical ou dois verticais e um horizontal");
    break;

  case "bispo":
    console.log("Bispo -> Diagonais");
    break;

  case "rainha":
    console.log("Rainha -> horizontais, verticais ou diagonais");
    break;

  case "rei":
    console.log("Rei -> horizontal, vertical ou diagonal");
    break;

  default:
    console.log("entrada inválida")
}

//programa 07

let nota = 49;

if (nota >= 90) {
  console.log("A");
}
else if (nota >= 80){
  console.log("B");
}
else if (nota >= 70){
  console.log("c");
}
else if (nota >= 60){
  console.log("D");
}
else if (nota >= 50){
  console.log("E");
}
else if (nota>0 && nota<50){
  console.log("F");
}
else {
  console.log("Entrada inválida");
}

//programa 08

const num1 = 2;
const num2 = 4;
const num3 = 5;
let resultado;

resultado = ((num1%2!==0)||(num2%2!==0)||(num3%2!==0)) ? true : !true;
console.log(resultado);