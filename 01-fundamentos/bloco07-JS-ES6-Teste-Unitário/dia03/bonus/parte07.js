// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  }
];

const testInfo = (id, detail) => {
  let idBool = false;
  let detailBool = false;
  professionalBoard.forEach(element => {
    element.id === id ? idBool = true : null;
    element[detail] ? detailBool = true : null;
  });
  if (!idBool) throw new Error('ID não identificada');
  if (!detailBool) throw new Error('Informação indisponível');
};

// Pesquisa
const searchEmployee = (id, detail) => {
  let informacao = '';
  try {
    testInfo(id, detail);
    professionalBoard.forEach(element => {
     if (element.id === id) informacao = element[detail];
    });
    return informacao;
  }
  catch (e){
    return e.message;
  }
};

module.exports = searchEmployee;

console.log(searchEmployee('1256-4', 'firstName'));