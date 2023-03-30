// const name = 'Vladilen'
// const age = 26
// function getAge() {
//     return age;
// }
//const output = 'Hi, my name is ' + name + ', may age is ' + age + ' years.'
//output = `Hi, my name is ${name}, may age is ${getAge()} years.`
//output = `Hi, my name is ${name}, may age is ${age < 20 ? 'A' : 'B'} years.`

// const output =`
//     <div>This is div</div>
//     <p>this is p</p>
//     `
// console.log(output)

// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.startsWith('Vlad'))
// console.log(name.endsWith('en'))
// console.log(name.repeat(3))
// const string = '     password    '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
age = 'not burn'
    }
    console.log(s,name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Vladilen'
const personName2 = 'Maks'
const personAge = 26
const personAge2 = -10

const output = logPerson`Name: ${personName}, age: ${personAge}`
const output2 = logPerson`Name: ${personName2}, age: ${personAge2}`

console.log(output)
console.log(output2)


