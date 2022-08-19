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
const num3 = 6;
let resultado;

resultado = ((num1%2===0)||(num2%2===0)||(num3%2===0)) ? true : !true;
console.log(resultado);

//programa 09

resultado = ((num1%2!==0)||(num2%2!==0)||(num3%2!==0)) ? true : !true;
console.log(resultado);

//programa 10

const valorCusto = 100;
const valorVenda = 130;
const imposto = 20/100;

if ((valorCusto>=0)&&(valorVenda>=0)) {
  let valorCustoTotal = valorCusto + (valorCusto * imposto);
  let lucro = valorVenda - valorCustoTotal;
  console.log(lucro*1000);
} else {
  console.log("Valores Inválidos");
}

//programa 11

let salarioBase = 3000.00;
let salarioReduzido = 0;
let salarioFinal = 0;
let inss = 0;
let impostoRenda = 0;

let inssAliquota8 = 556.94;
let inssAliquota9 = 2594.92;
let inssAliquota11 = 5189.82;

let irAliquota7 = 1903.99;
let irAliquota15 = 2826.66;
let irAliquota22 = 3751.06;
let irAliquota27 = 4664.68;

let parcelaIr7 = 142.80;
let parcelaIr15 = 354.80;
let parcelaIr22 = 636.13;
let parcelaIr27 = 869.36;

if (salarioBase <= inssAliquota8) {
  inss = salarioBase * 0.08;
}
else if ((salarioBase >inssAliquota8)&&(salarioBase<=inssAliquota9)){
  inss = salarioBase * 0.09;
}
else if ((salarioBase > inssAliquota9)&&(salarioBase<=inssAliquota11)){
  inss = salarioBase * 0.11;
}
else if (salarioBase > inssAliquota11){
  inss = 570.88;
}

salarioReduzido = salarioBase - inss;

if (salarioReduzido < irAliquota7){
  salarioFinal = salarioReduzido;
}
else if ((salarioReduzido>=irAliquota7)&&(salarioReduzido < irAliquota15)){
  impostoRenda = (salarioReduzido*0.075)-parcelaIr7;
}
else if ((salarioReduzido >= irAliquota7)&&(salarioReduzido < irAliquota22)){
  impostoRenda = (salarioBase*0.15)-parcelaIr15;
}
else if ((salarioReduzido >= irAliquota22)&&(salarioReduzido < irAliquota27)) {
  impostoRenda = (salarioReduzido*0.225) - parcelaIr22;
}
else if (salarioReduzido >= irAliquota22) {
  impostoRenda = (salarioReduzido*0.275) - parcelaIr27;
}

salarioFinal = salarioReduzido - impostoRenda;
console.log("Desconto do INSS R$", inss );
console.log("Desconto do IR R$", impostoRenda);
console.log("Salário com descontos R$", salarioFinal);