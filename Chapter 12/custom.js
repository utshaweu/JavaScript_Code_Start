//Object Literal

// var rect = {
//   width: 100,
//   height: 50,

//   draw: function(){
//     console.log('I am a rectangle')
//     console.log('My Width is ' + this.width)
//     console.log('My Height is ' + this.height)
//   }
// }

// rect.draw()

// rect.height = 200

// rect.draw()


// //This Keyword

// var rect = {
//   width: 100,
//   height: 50,

//   draw: function(){
//     console.log('I am a rectangle')
//     this.printProperties()
//     console.log(this)
//   },
//   printProperties: function(){
//     console.log('My Width is ' + this.width)
//     console.log('My Height is ' + this.height)
//   }
// }

// rect.draw()

// function myFunc(){
//   console.log(this)
// }

// myFunc()

// var another = {
//   width: 47,
//   height: 57,
//   print: rect.printProperties
// }
// console.log(another.print)
// another.print()



//Factory Pattern

var createRect = function(width,height){
  return {
    width: width,
    height: height,
  
    draw: function(){
      console.log('I am a rectangle')
      this.printProperties()
      console.log(this)
    },
    printProperties: function(){
      console.log('My Width is ' + this.width)
      console.log('My Height is ' + this.height)
    }
  }
}

var rect1 = createRect(10,8)
rect1.draw()

var rect2 = createRect(100,20)
rect2.draw()


//Contructor Pattern

var Rectangle = function(width,height){
    this.width = width
    this.height = height
  
    this.draw = function(){
      console.log('I am a rectangle')
      this.printProperties()
      console.log(this)
    }
    this.printProperties = function(){
      console.log('My Width is ' + this.width)
      console.log('My Height is ' + this.height)
    }
}

var rect3 = new Rectangle(8,10)
rect3.draw()

//New Keyword Implementation

function myNew(constructor){
  var obj = {}
  Object.setPrototypeOf(obj,constructor.prototype)
  var argsArray = Array.prototype.slice.apply(arguments)
  constructor.apply(obj,argsArray.slice(1))
  return obj
}

var rect4 = myNew(Rectangle,45,30)
rect4.draw()


//Function are Object 

function test(){
  console.log('something')
}
console.log(test.name, test.length)

var Rect = new Function('width','height',`this.width = width
    this.height = height

    this.draw = function(){
      console.log('I am a rectangle')
      this.printProperties()
      console.log(this)
    }
    this.printProperties = function(){
      console.log('My Width is ' + this.width)
      console.log('My Height is ' + this.height)
    }`
)

var rect5 = new Rect(4,5)
console.log(rect5)
rect5.draw()

//Understanding Bind,Call and Apply

function myFunc(c,d){
  console.log(this)
  console.log(this.a + this.b + c + d)
}
myFunc.call({a: 45, b:25},10,5)
myFunc.apply({a: 10, b:20},[5,1])
myFunc()

var testBind = myFunc.bind({a:45, b:60})
testBind(6,6)


//Pass by value vs Pass by reference 
//Call by value vs Call by reference

var n = 10
function change(n){
  n = n + 100
  console.log(n)
}
change(n)
console.log(n)



var obj = {
  a : 10,
  b : 20
}

function changeMe(obj){
  obj.a = obj.a + 100
  obj.b = obj.b + 100
  console.log(obj)
}

changeMe(obj)
console.log(obj)

//Abstraction Private Properties

var Rectangle = function(width,height){
  
  var position = {
    X : 56,
    Y : -100
  }

  this.width = width
  this.height = height

  var printProperties = function(){
    console.log('My Width is ' + this.width)
    console.log('My Height is ' + this.height)
  }.bind(this)

  this.draw = function(){
    console.log('I am a rectangle')
    printProperties()
    console.log('Positon : X= ' + position.X + ' Y= ' + position.Y) 
  }
}

var rect7 = new Rectangle(100,200)
rect7.draw()





// Getter Setter

var Rectangle = function(width,height){
  
  var position = {
    X : 56,
    Y : -100
  }

  this.width = width
  this.height = height

  var printProperties = function(){
    console.log('My Width is ' + this.width)
    console.log('My Height is ' + this.height)
  }.bind(this)

  this.draw = function(){
    console.log('I am a rectangle')
    printProperties()
    console.log('Positon : X= ' + position.X + ' Y= ' + position.Y) 
  }

  Object.defineProperty(this, 'position',{
    get : function(){
      return position
    },
    set : function(value){
      position = value
    }
  })

}

var rect8 = new Rectangle(28,29)
rect8.draw()
rect8.position = {
  X : 500,
  Y : 600
}
console.log(rect8.position)