let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = "Sim";

for (let key in info){
  console.log(key);
}

let newInfo = info;

newInfo.personagem += " e Tio Patinhas";
newInfo.origem += " e Christmas on Bear Mountain, Dell's Four Color Comics #178";
newInfo.nota += " e O último MacPatinhas";
newInfo.recorrente += " // Atenção para essa última linha!";

console.log(newInfo);