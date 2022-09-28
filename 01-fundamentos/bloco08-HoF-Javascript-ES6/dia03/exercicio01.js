const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
function formatedBookNames(books) {
  // escreva seu código aqui
  const array = [];
  books.map((element) => {
    array.push(`${element.name} - ${element.genre} - ${element.author.name}`);
  });
  return array;
};

// console.log(formatedBookNames(books));

function nameAndAge(books) {
  // escreva seu código aqui
  let array = [];
  books.map((element) => {
    array.push({
      age: (element.releaseYear - element.author.birthYear),
      author: element.author.name,
    });
    array = array.sort((a,b) => a.age - b.age);
  });
  return array;
};

// console.log(nameAndAge(books));

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  return books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');
};

// console.log(fantasyOrScienceFiction());

function oldBooksOrdered() {
  // escreva seu código aqui
  return books.filter((element) => (2022 - element.releaseYear) >= 60).sort((a,b) => a.releaseYear - b.releaseYear);
};

// console.log(oldBooksOrdered());

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  return books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')
  .map(element => element.author.name).sort();
};

// console.log(fantasyOrScienceFictionAuthors());

function oldBooks() {
  // escreva seu código aqui
  const array = [];
  const sup = books.filter((element) => (2022 - element.releaseYear) >= 60);
  sup.map((element) => array.push(element.name));
  return array;
};

// console.log(oldBooks());

function authorWith3DotsOnName() {
  return books.find(({author: {name}}) => (
    name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
};

console.log(authorWith3DotsOnName());
