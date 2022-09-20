const searchEmployee = require('./parte07');

describe('Testa função searchEmployee', () => {
  test('testa se a função searchEmployee existe', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  test('testa se retorna informaçao certea ao passar id e chave do objeto', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
    expect(searchEmployee('1256-4', 'specialities')).toContain('Hooks', 'Context API', 'Tailwind CSS');
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
  });

  test('testa se retorn "ID não identificada" após passar id inválid', () => {
    expect(searchEmployee('1256-8', 'specialities')).toContain('ID não identificada');
  });

  test('testa se retorna "Informação indisponível" se passar detail inválido', () => {
    expect(searchEmployee('1256-4', 'middleName')).toContain('Informação indisponível');
  });
});