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

function authorBornIn1947(livros) {
  // escreva aqui o seu código
  return livros.find((book) => book.author.birthYear === 1947);
};

// console.log(authorBornIn1947(books).author.name);

function smallerName(bookNames) {
  let nameBook = [];
  // escreva aqui o seu código
  let names = [];
  bookNames.forEach(element => {
    names.push(element.name);
    [nameBook] = names.sort((a,b) => a.length - b.length );
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// console.log(smallerName(books));

function getNamedBook(array) {
  // escreva seu código aqui
  return array.find((book) => book.name.length === 26).name;
};

// console.log(getNamedBook(books));

function booksOrderedByReleaseYearDesc(books) {
  // escreva aqui seu código
  return books.sort((a,b) => b.releaseYear - a.releaseYear);
};

// console.log(booksOrderedByReleaseYearDesc(books));

const expectedResult = false;

function everyoneWasBornOnSecXX(array) {
  // escreva seu código aqui
  return array.every((element) => element.author.birthYear > 1901);
};

// console.log(everyoneWasBornOnSecXX(books));

function someBookWasReleaseOnThe80s(array) {
  // escreva seu código aqui
  return array.some((element => element.releaseYear > 1980 && element.releaseYear < 1989));
};

// console.log(someBookWasReleaseOnThe80s(books));

function authorUnique() {
  return books.every((book) =>
    books.some((bookSome) =>
      !(bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
};

console.log(authorUnique());

