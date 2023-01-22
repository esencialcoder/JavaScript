const arr = [1, 2, 3 ];

const multiplicarPor2 = (valor) => {
    console.log(valor * 2);
}
// le podemos pasar un callback
arr.forEach(multiplicarPor2);

// le podemos pasar una función anónima
arr.forEach((valor) => {
    console.log(valor * 2);
}
)
// map nos devuelve un array nuevo
const resultadoMap = arr.map(elem => elem * 3);
console.log(resultadoMap);

// find nos permite encontrar elementos
const legolas = {
    name: 'legolas',
    attackSpeed: 20,
    attackDamage: 10
}

const aragorn = {
    name: 'aragorn',
    attackSpeed: 15,
    attackDamage: 15
}

const gimly = {
    name: 'gimly',
    attackSpeed: 7,
    attackDamage: 20
}

const personajesArr = [
    legolas,
    aragorn,
    gimly
]

// encuentra un personaje que tenga attackDamage < 30
let personaje = personajesArr.find(personaje => personaje.attackDamage < 30)
console.log(personaje)

 // encuentra todos aquellos personajes que tengan attackDamage < 19   
let personajes = personajesArr.filter(personaje => personaje.attackDamage < 19)
console.log(personajes)
    


