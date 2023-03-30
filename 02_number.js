// //Number
// const num = 42      // integer
// const float = 42.72 // float
// const pow = 10e3    //10 000
// console.log(float)
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2,53) - 1)
//
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
//
// console.log('Number.MAX_VALUE', Number.MAX_VALUE)
// console.log('Number.MIN_VALUE', Number.MIN_VALUE)
//
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('2/0', 2/0)
// console.log(isFinite(Number.POSITIVE_INFINITY))  //конечно ли
//
// console.log(Number.NaN) // Not a Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(isNaN(weird))
//
// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(Number.parseInt(stringInt)+2)
// console.log(Number(stringInt)+2)
// console.log(+stringInt + 2)

// console.log(0.4 + 0.2)
// console.log(parseFloat((0.4+0.2).toFixed(2)))

//2 BigInt
console.log(typeof 9007199254740992999n)
console.log(9007199254740992999n - 9007199254740992999n)
console.log(-9007199254740992999n)
// console.log(-9007199254740992999.23n) //error
// console.log(10n-4)   // error
console.log(parseInt(10n)-4)
console.log(10n-BigInt(4))

//3 Math
// console.log(Math.E)
// console.log(Math.PI)
//
// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(-46))
// console.log(Math.min(25, 3, -12, 123))
// console.log(Math.max(25, 3, -12, 123))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.9))
// console.log(Math.trunc(4.9))
// console.log(Math.random)

// 4 Example
function getRandomBetween(min, max) {
    return Math.floor(Math.Random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42));