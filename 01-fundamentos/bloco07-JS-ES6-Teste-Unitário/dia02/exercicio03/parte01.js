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

// console.log(verifica(lesson3, 'turno', 'noite'));
// console.log(verifica(lesson3, 'materia', 'Maria Clara'));

const estudantesMatematica = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  console.log(array);
  for (index in array) {
    if(obj[array[index]].materia === 'Matemática'){
    total += obj[array[index]].numeroEstudantes;
    }
  }
  console.log(total);
}

// estudantesMatematica(allLessons);

function testaParametros(obj, nome) {
  const lessons = Object.keys(obj);
  let bool;
  for (i of lessons) {
    if (obj[i].professor === nome) bool = true;
  }
  if (!bool) throw new Error ('Nome do(a) professor(a) não encontrado');
}

const info = (obj, nome) => {
  const lessons = Object.keys(obj);
  let nomeMateria = [];
  let numeroAlunos = 0;
  for (i of lessons) {
    if (obj[i].professor === nome) {
      nomeMateria.push(obj[i].materia);
      numeroAlunos += obj[i].numeroEstudantes;
    }
  }
  return {materia: nomeMateria.join(', '), estudantes: numeroAlunos};
};

const relatorio = (obj, nome) => {
  try {
    testaParametros(obj, nome);
    const relato = {professor: nome};
    Object.assign(relato, info(obj, nome));
    console.log(relato);
  }
  catch (erro) {
    console.log(erro.message);
  }
};



relatorio(allLessons, 'Maria Clara');