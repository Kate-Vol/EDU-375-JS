// 1 Массивы
const cars =['Mazda', 'Ford', 'BMW']
const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]
const fib = [1, 1, 2, 3, 5, 8, 13]
//Function
function addItemToEnd(){}

// //Method
// cars.push('Porshe')
// cars.unshift('Volga')
// const firstItem = cars.shift()
// console.log(firstItem);
//
// const lastItem = cars.pop()
// console.log(lastItem);
//
//  console.log(cars)
//
//
// console.log(cars.reverse())
// console.log(cars)
//
// //Example 1
// const text = 'Hi, we are learning JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText);

// const index =cars.indexOf('Ford')
// cars[index] = 'Porshe'
// console.log(cars)


// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const index = people.findIndex(function (person){
//     return person.budget === 3500
// })
// const person = people.find(function(person){
//     return person.budget === 3500
// })

// const person = people.find(person => person.budget === 3500)
// console.log(person)

// console.log(cars.includes('BMW'));
// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)
//
// const pow2Fib = fib.map(num => num ** 2)
// console.log(pow2Fib)

 const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => {
//     return num > 20
// })
// console.log(pow2Fib)
// console.log(filteredNumbers)

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget
        return acc
}, 0)

console.log(allBudget)