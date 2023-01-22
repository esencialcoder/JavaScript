// class Personaje {
//   constructor(name, attackSpeed = 0, attackDamage = 0) {
//     this.name = name;
//     this.attackSpeed = attackSpeed;
//     this.attackDamage = attackDamage;
//     console.log(`Construyendo ${name}`);
//   }
// }
// personajes que se construyen con Objetos Literales
// const legolas = {
//     name: 'legolas',
//     attackSpeed: 20,
//     attackDamage: 10
// }

// const aragorn = {
//     name: 'aragorn',
//     attackSpeed: 15,
//     attackDamage: 15
// }

// const gimly = {
//     name: 'gimly',
//     attackSpeed: 7,
//     attackDamage: 20
// }
function Personaje(name, attackSpeed = 0, attackDamage = 0) {
  this.name = name;
  this.attackSpeed = attackSpeed;
  this.attackDamage = attackDamage;
  console.log(`Construyendo ${name}`);
}

// personajes que se construyen con objetos de Clase Personajes
const legolas = new Personaje("legolas", 20, 10);
const aragorn = new Personaje("aragorn", 15, 15);
const gimly = new Personaje("gimly", 7, 20);

console.log(legolas instanceof Personaje);
console.log(legolas instanceof Object);

// objeto literal
let saruman = { name: "saruman" };
saruman._proto_ = new Personaje();
// let saruman = {name:'saruman}
// Object.setPrototypeOf(saruman, new Personaje);
console.log(saruman instanceof Personaje);
console.log(saruman instanceof Object);

function atacar(personaje, callback) {
  let attack = callback(personaje);
  console.log(
    `${personaje.name} ataca con ataque ${attack.weapon} cauasando ${attack.damage} a velocidad ${attack.speed}`
  );
}

function attakWithSword(person) {
  return {
    weapon: "Sword",
    damage: person.attackDamage + 16,
    speed: person.attackSpeed + 23,
  };
}
function attakWithBowAndArrow(person) {
  return {
    weapon: "Bow & Arrow",
    damage: person.attackDamage + 10,
    speed: person.attackSpeed + 33,
  };
}
function attakWithAxe(person) {
  return {
    weapon: "Axe",
    damage: person.attackDamage + 30,
    speed: person.attackSpeed + 9,
  };
}

atacar(gimly, attakWithAxe);
atacar(aragorn, attakWithAxe), atacar(aragorn, attakWithSword);
