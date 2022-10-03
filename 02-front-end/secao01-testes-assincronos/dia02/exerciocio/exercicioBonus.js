// apiScript.js
const h2 = document.querySelector('#jokeContainer')
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };
  try {
    const response = await fetch(API_URL, myObject);
    const data = await response.json();
    h2.innerHTML = data.joke;
  } catch(e) {
    console.log(e);
  }
};

window.onload = () => fetchJoke();
