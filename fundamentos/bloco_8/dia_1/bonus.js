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

const damage = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const dragonDmg = () => damage(15, dragon.strength);

const warriorDmg = () =>
  damage(warrior.strength, warrior.strength * warrior.weaponDmg);

const mageDmg = () => {
  if (mage.mana < 15) return 'Não possui mana suficiente';
  return {
    damage: damage(mage.intelligence, mage.intelligence * 2),
    manaCost: mage.mana - 15,
  };
};

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorAtk: (callback) => {
    const dano = callback();
    dragon.healthPoints = dragon.healthPoints - dano;
    warrior.damage = dano;
  },
  mageAtk: (callback) => {
    const danoMana = callback();
    if (typeof danoMana === 'object') {
      dragon.healthPoints = dragon.healthPoints - danoMana.damage;
      mage.damage = danoMana.damage;
      mage.mana = danoMana.manaCost;
    }else {
      return console.log(danoMana);
    }
  },
  dragonAtk: (callback) => {
    const dano = callback();
    warrior.healthPoints -= dano;
    mage.healthPoints -= dano;
    dragon.damage = dano;
  }
};

gameActions.warriorAtk(warriorDmg);
gameActions.mageAtk(mageDmg);
gameActions.dragonAtk(dragonDmg);

console.log(battleMembers);
