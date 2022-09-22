const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// parte I

const dragonDmg = ({dragon}) => {
  const dmg = Math.ceil(Math.random() * dragon.strength);
  return dmg < 15 ? 15 : dmg;
};

const warriorDmg = ({warrior}) => {
  let dmg = Math.ceil(Math.random() * warrior.strength) + warrior.weaponDmg;
  return dmg;
};

const mageDmg = ({mage}) => {
    let dmg = 0;
  if (mage.mana > 15) {
    dmg = Math.ceil(Math.random() * (mage.intelligence * 2));
    let mana = mage.mana -= 15;
    return {dmg, mana};
  }
  return {dmg, mana: 'Não possui mana suficiente'};
};

// parte II

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (members, action) => {
    members.warrior.damage = action(members);
    members.dragon.healthPoints -= members.warrior.damage;
  },
  mageTurn: (members, action) => {
    let status = action(members);
    members.mage.mana = status.mana;
    members.mage.damage = status.dmg;
    if (Number.isInteger(members.mage.damage)) members.dragon.healthPoints -= members.mage.damage;
  },
  dragonTurns: (members, action) => {
    members.dragon.damage = action(members);
    members.mage.healthPoints -= members.dragon.damage;
    members.warrior.healthPoints -= members.dragon.damage;
  },
  atualizaStatus: (members) => {
    let turno = 1;
    while (members.dragon.healthPoints > 0 && members.mage.healthPoints > 0 && members.warrior.healthPoints > 0) {
      gameActions.warriorTurn(members, warriorDmg);
      gameActions.mageTurn(members, mageDmg);
      gameActions.dragonTurns(members, dragonDmg);
      console.log(`---=== Turno ${turno} ===---`);
      turno += 1;
      console.log(members);
    }
  },
};

gameActions.atualizaStatus(battleMembers);