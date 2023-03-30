//1 Переменные
//variable

//var name = 'Vladilen'
const firstName = 'Vladilen'
//const lastName = 'Minin' //string
//let age = 26 // number
// const age = 26
// const isProgrammer = true //boolean


// name = 'Vlad'



// console.log(name)

//2 Мутирование
// console.log('Имя: ' + firstName + ', age: ' + age)
//
// const lastName = prompt('Enter Lastname: ')
// alert(firstName+ ' ' + lastName)

//3 Операторы
// const currentYear = 2023
// const birthYear = 1989
// const age = currentYear + birthYear
// console.log(age)

//4 Типы данных
// const isProgrammer = true
// const name = 'Vladilen'
// const age = 26
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)

//5 Приоритет операторов
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020
//
// const isFullAge = currentYear - birthYear >= fullAge

//6 словные оперторы
const courseStatus = 'pending' // ready, fail, pending
if (courseStatus === 'ready') {
    console.log('Course is ready')
} else if (courseStatus === 'pending') {
    console.log('Course is pending')
} else {
    console.log('Course is fail')
}

// const num1 = 42 //number
// const num2 = '42' //string
//
// console.log(num1 == num2) // true
// console.log(num1 === num2) // false


 const isReady = false
// if (isReady){
//     console.log('Ok')
// }else{
//     console.log('Not ok')
// }

//Тернарное выражение
isReady ? console.log('Ok') : console.log('Not ok')

//7 Булевая логика

//8 Функции
function calculateAge(year){
    return 2020 - year
}

console.log(calculateAge(1993))
console.log(calculateAge(2019))
console.log(calculateAge(1999))

function logInfoAbout(name, year) {
    const age = calculateAge(year)
    if (age > 0) {
        console.log('Men name: ' + name + ', age ' + age)
    } else {
        console.log('Its future')
    }
}

logInfoAbout('Elena', 1993)
logInfoAbout('Elena', 2023)

//9 Массивы
const cars =['Mazda', 'Nissan', 'Ford']
// const cars = new Array('Mazda', 'Nissan', 'Ford')
// console.log(cars)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars.length)
//
// cars[0] = 'Peugeot'
// cars[3] = 'Mazda'
// cars[cars.length] = 'Oka'
// console.log(cars)

//10 Циклы
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars){
//     console.log(car)
// }

// 11 Объекты
 const person = {
    firstName : 'Vladilen',
    lastName: 'Minin',
     year: 1993,
     languages: ['Ru', 'En', 'De'],
     hasWife: false,
     greet: function () {
        console.log('greet')
     }
 }

console.log(person)
console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.greet()
person.isProgrammer = true
console.log(person)


