let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let bloco2 = moradores.blocoDois;
let bloco2_2 = moradores.blocoDois[moradores.blocoDois.length-1];
console.log("O morador do bloco 2 de nome", bloco2_2.nome, bloco2_2.sobrenome,"mora no", bloco2_2.andar, "andar, apartamento",bloco2_2.andar);

let bloco1 = moradores.blocoUm;

for (let i = 0; i < bloco1.length; i += 1) {
  console.log(bloco1[i].nome, bloco1[i].sobrenome);
}

for (let i = 0; i < bloco1.length; i += 1){
  console.log(bloco2[i].nome, bloco2[i].sobrenome);
}