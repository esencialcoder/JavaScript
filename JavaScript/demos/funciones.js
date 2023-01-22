/**
 * Devuelve un string Hello... lo que sea
 * @param {String} name 
 * @param {String|undefined} surname 
 * @returns 
 */
function hello1(name, surname = 'Skywalker', age = 37) {
    return `Hello ${name} ${surname}. You are ${age} years old` 
}
let result1 = hello1('Jordi')
console.log(result1);

let result2
const hello2 = function hello1(name, surname = 'Skywalker') {
    return `Hello ${name} ${surname}` 
}
result2 = hello2('') // imprime Hello  Skywalker. You are 37 years old
console.log(result2)
result2 = hello2('Jordi', undefined, 37) // imprime Hello Jordi Skiwalker. You are 37 years old
console.log(result2)

////////////////////////////
////////// ARROW FUNCTIONS
////////////////////////////

let result3
/**
 * 
 * @param {String} name 
 * @param {String} surname 
 * @param {String} age 
 * @returns {String}
 */
const hello3 = (name, surname = 'Skywalker', age = 37) => {
    return `Hello ${name} ${surname}. You are ${age} years old` 
}
result3 = hello3('')
console.log('result3', result3);

let result4
/**
 * 
 * @param {String} name 
 * @param {String} surname 
 * @param {String} age 
 * @returns {String} 
 */
const hello4 = (name, surname = 'Skywalker', age = 37) => `Hello ${name} ${surname}. You are ${age} years old`
result4 = hello4('Jordi', undefined, 37) // imprime Hello Jordi Skywalker. Your are 37 years old
console.log('result4', result4);

let result5
/**
 * 
 * @param {String} name 
 * @returns {String}
 */
const hello5 = name => `Hello ${name}`
result5 = hello5('') // result5 === Hello
console.log('result5', result5);
result5 = hello5('Jordi', undefined, 37) // imprime Hello Jordi Skywalquer, e ignora los otros parámetros
console.log('result5', result5 ) // imprime Hello Jordi

console.log('result5', hello5)






