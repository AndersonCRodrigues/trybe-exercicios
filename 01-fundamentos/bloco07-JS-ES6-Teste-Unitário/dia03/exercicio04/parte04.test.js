const {encode, decode} = require('./parte04.js');

describe('Testa função encode e decode', () => {
  test('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('ana')).toEqual('1n1');
    expect(encode('ele')).toEqual('2l2');
    expect(encode('xixi')).toEqual('x3x3');
    expect(encode('ovo')).toEqual('4v4');
    expect(encode('nu')).toEqual('n5');
  });

  test('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('1n1')).toEqual('ana');
    expect(decode('2l2')).toEqual('ele');
    xpect(decode('x3x3')).toEqual('xixi');
    expect(decode('4v4')).toEqual('ovo');
    xpect(decode('n5')).toEqual('nu');
  });
});