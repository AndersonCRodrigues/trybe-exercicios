const myFizzBuzz = require('./parte03.js');

describe('Testa função myFizzBuzz', () => {
  it('retorna "fizz" se passar 3 e retornar "buzz" se passar 5', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('retorna "fizz" quando o número é mutltiplo de 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('retorna "buzz quando o número é multiplo de 5"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('retorna "fizzbuzz" caso o número seja múltiplo de 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('retorna 1 se passar 1', () => {
    expect(myFizzBuzz(1)).toBe(1);
  });

  it('retorna "false" caso passar algo que não seja um número', () => {
    expect(myFizzBuzz([])).toBeFalsy();
  });
});