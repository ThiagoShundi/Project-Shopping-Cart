const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('Verificar se o getSavedCartItems é uma função', () => {
    expect.assertions(1);
    expect(typeof getSavedCartItems).toBe('function');
  });

  it('Verificar se a função getSavedCartItems está chamando o parâmetro', () => {
    expect.assertions(1);
    getSavedCartItems('cartItem');
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Verificar se a função getSavedCartItems está retornando os parâmetros', () => {
    expect.assertions(1);
    getSavedCartItems('cartItem');
    expect(localStorage.getItem).toHaveBeenCalledWith("cartItems");
  });


  // fail('Teste vazio');
});
