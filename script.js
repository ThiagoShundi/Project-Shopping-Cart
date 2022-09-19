// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const searches = async () => {
  const local = document.querySelector('.items');
  const search = await fetchProducts('computador');
  search.results.forEach((product) => {
    local.appendChild(createProductItemElement(product));
  });
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

// cartItemClickListener 

const locals = () => document.querySelector('.cart__items');
const Mlocals = () => document.querySelectorAll('.cart__item');

const cartItemClickListener = (event) => {
  const cartRemove = locals();
  cartRemove.removeChild(event.target);
  saveCartItems(cartRemove.innerHTML);
};

const ClearButton = () => {
  const button = document.querySelector('.empty-cart');
    button.addEventListener('click', () => {
    const cartRemoveAll = Mlocals();
    cartRemoveAll.forEach((clear) => {
      clear.remove();
    });
    saveCartItems(locals().innerHTML);
  });
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', (cartItemClickListener));
  return li;
};

const adds = async () => {
  const local = document.querySelectorAll('.item__add');
    local.forEach((produto) => {
      const products = getIdFromProductItem(produto.parentNode);
      produto.addEventListener('click', async () => {
        const cart = locals();
        cart.appendChild(createCartItemElement(await fetchItem(products)));
        const listaDeFavoristos = locals();
        saveCartItems(listaDeFavoristos.innerHTML);
    });
  });
};

const windownLoading = () => {
  const local2 = document.querySelector('.container');
  local2.appendChild(createCustomElement('p', 'loading', 'carregando...'));
};

const windownDestroy = () => {
  const local2 = document.querySelector('.loading');
  local2.remove();
};

// const somaTotal = async () => {
//   console.log(createCartItemElement(await fetchItem('MLB1937076326')));
// };

window.onload = async () => {
  windownLoading();
  await searches();
  windownDestroy();
  adds();
  locals().innerHTML = getSavedCartItems();
  const retornarValoresDoStorage = Mlocals();
  retornarValoresDoStorage.forEach((storageProduct) => {
    storageProduct.addEventListener('click', cartItemClickListener);
  });
  ClearButton();
  // somaTotal();
};