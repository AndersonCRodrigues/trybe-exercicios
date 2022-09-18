const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (obj, key, value) => obj[key] = value;

const listaChaves = (obj) => console.log(Object.keys(obj));

const lengthObj = (obj) => console.log(Object.keys(obj).length);

const listaValores = (obj) => console.log(Object.values(obj));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

addTurno(lesson1, 'turno', 'noite');

// listaChaves(lesson1);

// lengthObj(lesson1);

// listaValores(lesson1);

// console.log(allLessons);

const numeroEstudantes = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    total += obj[array[i]].numeroEstudantes; // incremente a variável total a cada iteração
  }
  console.log(total);
}

// numeroEstudantes(allLessons);

const obtemValor = (obj, index) => {
  const keys = Object.keys(obj);
  console.log(obj[keys[index]]);
};

// obtemValor(lesson1, 0);

const verifica = (obj, key, value) => obj[key] === value ? true : false;

console.log(verifica(lesson3, 'turno', 'noite'));
console.log(verifica(lesson3, 'materia', 'Maria Clara'));