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