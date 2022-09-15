const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Verificar se o saveCartItem é uma função', () => {
    expect.assertions(1);
    expect(typeof saveCartItems).toBe('function');
  });

  fail('Teste vazio');
});
