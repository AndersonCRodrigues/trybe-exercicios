const fetchCurrency = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1';
  const dateUrl = '/latest';
  const endPoint = '/currencies/usd.min.json';
  const url = baseUrl + dateUrl + endPoint;

  const response = await fetch(url);
  const data = await response.json();
  const { brl } = data.usd;
  return brl;
};

const construct = async ({ name, symbol, priceUsd }) => {
  const cryptoList = document.getElementById('coins-list');
  const cryptoCoin = document.createElement('li');
  const price = Number(priceUsd).toFixed(2);
  const real = (Number(await fetchCurrency()) * price).toFixed(2);

  cryptoCoin.innerText = `${name} (${symbol}): $ ${price} => R$ ${real}`;
  cryptoList.appendChild(cryptoCoin);
};

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const response = await fetch(url);
  const { data } = await response.json();
  data.slice(0, 10).forEach(construct);
};

window.addEventListener('load', fetchCoins);