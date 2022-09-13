require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Verificar se o fetchItem é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });

  it('Verificar se a função fetch está chamando o parâmetro', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verificar se a função fetch (\'MLB1615760527\') retorna o endpoint correto', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('Verificar se a função sem parâmetros retorna uma mensagem de erro', async () => {
    expect.assertions(1);
    expect(await fetchItem()).toBe(('You must provide an url'));
  });

  // fail('Teste vazio');
});
