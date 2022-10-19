const { uppercase, imprime } = require('./exercicio05');
const { expect } = require('@jest/globals')

/* it('uppercase "test" to equal "TEST"', (done) => { // 1. Criamos o it
  uppercase('test', (strUpperCase) => { // 2. Chamamos a função `uppercase`
    try { // 3. Adicionamos o `try/catch
      expect(strUpperCase).toBe('TEST'); // 4. Criamos o expect
      done(); // 5. Chamamos a função `done`
    } catch (error) {
      done(error); // 6. Chamamos a função `done` com o parâmetro `error`
    }
  });
}); */

it('uppercase "test" to equal "TEST"', () => {
  // expect.assertions(1);
  uppercase('test', (async (imprime) => {
    expect(await imprime).toEqual('TEST');
  }));
});