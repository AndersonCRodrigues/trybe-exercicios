let lista = [];

for (let i = 0 ; i < 25; i += 1) {
  lista[i] = Math.ceil(Math.random() * 25);
  console.log(lista[i]);
}

console.log(lista.length);