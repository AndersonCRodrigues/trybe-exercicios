const a = 5;
const b = 3;
const c = 7;
let operacao = null;

operacao = "+";

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

if (a > b) {

  console.log(a + " maior que " + b);

}

else {
  console.log(b + " maior que " + a);
}

if (a>b && a>c) {
  console.log(a + " é maior que " + b + " e " + c);
}
else if (b>a && b>c) {
    console.log(b + " é maior que " + a + " e " + c);
}

else {
  console.log(c + " é maior que " + a + " e " + b);
}