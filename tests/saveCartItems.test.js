const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui

  it('Verificar se o saveCartItem é uma função', () => {
    expect.assertions(1);
    expect(typeof saveCartItems).toBe('function');
  });

  it('Verificar se a função saveCartItem está chamando o parâmetro', () => {
    expect.assertions(1);
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Verificar se a função saveCartItem está retornando os parâmetros', () => {
    expect.assertions(1);
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalledWith("cartItems", "cartItem");
  });

  // fail('Teste vazio');
});
