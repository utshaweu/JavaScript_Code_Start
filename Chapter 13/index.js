//Inheritance

// function Person(name){
//   this.name = name
// }

// var p1 = new Person('Sajib')
// console.log(p1)


//Property Descriptor
var person = {
  name: 'Sajib Mahmud'
}

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor)

// let baseObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)

// Object.defineProperty(person, 'name',{
//   enumerable: false,
//   writable: false,
//   configurable: false
// })


//Constructor Prototype
function Person(name){
  this.name = name
}
Person.prototype.PI = 3.1416

var p1 = new Person('Sajib Mahmud')
var p2 = new Person('mahmud')

console.log(p1)
console.log(p2)


//Instance vs Prototype Members
function Square(width){
  this.width = width
  this.getWidth = function(){
    console.log('Width is ' + this.width)
  }
}

Square.prototype = {
  draw: function(){
    this.getWidth()
    console.log('Draw')
  },
  toString: function(){
    return 'My width is = ' + this.width
  }
}

var sq1 = new Square(10)
var sq2 = new Square(5)
console.log(sq1)
console.log(sq2)

console.log(Object.keys(sq1)) //Instance property janar jonno use kora hoi

for (var i in sq1){
  console.log(i) // instance & prototype both property janar jonno use kora hoi
}