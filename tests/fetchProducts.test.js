require('../mocks/fetchSimulator');

const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Verificar se o fetchProduts é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });

  it('Verificar se a função fetch está chamando o parâmetro', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verificar se a função fetch (\'computador\') retorna o endpoint correto', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Verificar se a função sem parâmetros retorna uma mensagem de erro', async () => {
    expect.assertions(1);
    expect(await fetchProducts()).toBe(('You must provide an url'));
  });

  // fail('Teste vazio');
});
