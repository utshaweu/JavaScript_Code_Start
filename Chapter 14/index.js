function Shape(){

}

Shape.prototype.common = function(){
  console.log('I am a common method')
}

function Square(width){
  this.width = width
}
Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function(){
  console.log('Drawing')
}

var shape = new Shape()
var sqr = new Square(45)

// shape -> Shape -> Object
// sqr -> Square -> Object

//sqr -> Square -> Shape -> Object

function Circle(){

}

Circle.prototype  = Object.create(Shape.prototype)

//Inheritance and Composition mixin

function mixin(target, ...source){
  Object.assign(target,...source)
}

var canWalk = {
  walk: function(){
    console.log('Walking...')
  }
}

var canEat = {
  eat: function(){
    console.log('Eating...')
  }
}

function Person(name){
  this.name = name
}

mixin(Person.prototype,canWalk,canEat)
var person = new Person('Sajib mahmud')
console.log(person)