import '../styles/index.scss'

// //Template String

// var s = `Sajib 
//           Mahmud
//                 utshaw`
// console.log(s.trim())

// var age = 24
// var name = 'Utshaw'

// console.log(`My name is ${name} and I am ${age} years old. I am ${age < 18 ? 'not ' : '' }adult.`)

// console.log(name.padStart(15,'*'))
// console.log(name.padEnd(15,'a'))
// console.log('S'.repeat(15))

// // Arrow Function
// let add = (a,b) => a + b
// console.log(add(45,50))

// let sqr = x => x * x
// console.log(sqr(5))

// //Arrow Functions & this
// let obj = {
//   name: 'Sajib Mahmud',
//   print : function(){
//     setTimeout(() => {
//       console.log(this)
//       console.log(`Hello, ${this.name}`)
//     },1000)
//   }
// }
// obj.print()

// //Rest and Spread Operators
// function sum(...rest){
//   return rest.reduce((a,b) => a + b)
// }
// console.log(sum(1,2,3,4,5))


// let a = [1,2,3]
// console.log(...a)

// let obj = {
//   a: 10,
//   b: 20,
//   c: 30
// }

// let obj2 = {
//   ...obj
// }

// //Enhance Object
// let a = 10, b=20
// let obj = {
//   a,
//   b,
//   print(){
//     console.log(this)
//   }
// }
// obj.print()

//Destructuring
let person = {
  name: 'Sajib',
  email: 'utshaw1995@gmail.com',
  address: {
    city: 'Dhaka',
    Country: 'Bangladesh'
  }
}

let {name,email,address,address:{city,Country}} = person
console.log(name,email,city,Country)

let arr = [1,2,3,4,5]

let [first,second, , ,last] = arr
console.log(first,second,last)

//Object from entries
var obj = {
  a: 10,
  b: 20
}
console.log(Object.entries(obj))

var objArr = [
  ['a',10],
  ['b',20]
]

console.log(Object.fromEntries(objArr))