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
