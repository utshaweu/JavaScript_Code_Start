// console.log('Welcome Home')
// console.log('khela hobe')


// //Iterator use in ES5

// let arr = [1,2,3]

// function createIterator(collection){
//   let i = 0
//   return {
//     next(){
//       return{
//         done: i >= collection.length,
//         value: collection[i++]
//       }
//     }
//   }
// }

// let iterate = createIterator(arr)
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// //ES6 Iterator
// let arr = [1,2,3]

// let iterate = arr[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// let str = 'SAJIB'

// let iterateText = str[Symbol.iterator]()

// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())


// //For of loop

// let arr = [1,2,3]

// for(let v of arr){
//   console.log(v)
// }

// for (let v of 'SAJIB MAHMUD'){
//   console.log(v)
// }



// //How to create custom Iterable Object

// let obj = {
//   start: 1,
//   end: 5,
//   [Symbol.iterator]: function(){
//     let currentValue = this.start
//     const self = this
//     return{
//       next(){
//         return{
//           done: currentValue > self.end,
//           value: currentValue > self.end ? undefined : currentValue++
//         }
//       }
//     }
//   }
// }

// // for (let v of obj){
// //   console.log(v)
// // }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())



// //Generator Function

// let obj = {
//   start: 1,
//   end: 5,
//   [Symbol.iterator]: function* (){
//     let currentValue = this.start
//     while(currentValue <= this.end){
//       yield currentValue++
//     }
//   }
// }
// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// let arr =[1,2,3]

// function* generator(collection){
//   for(let i = 0;i<collection.length;i++){
//     yield collection[i]
//   }
// }
// let it = generator(arr)
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())




// //Kivabe amra measure korbo kono Object iterable kina?

function isIterable(obj){
  return typeof obj[Symbol.iterator] === 'function'
}

// console.log(isIterable({}))
// console.log(isIterable(obj))
// console.log(isIterable([]))
// console.log(isIterable('test'))
// console.log(isIterable(new Number(45)))
// console.log(isIterable(new Map()))
// console.log(isIterable(new Set()))




// //Understanding Sets in ES6

// let set = new Set([1,2,3])
// set.add(4)
// set.add(5)
// set.add(1)
// console.log(set)
// console.log(set.size)

//set.clear()
//set.delete(5)
// console.log(set.has(5))
// console.log(set)

// console.log(set.keys())
// console.log(set.values())

//let keyIterate = set.values()
// let keyIterate = set.keys()
// console.log(keyIterate.next())

//console.log(isIterable(set))

// for (let v of set){
//   console.log(v)
// }

// console.log(set.entries())



// //Understanding Map is ES6

// let map = new Map([
//   ['a',10],
//   ['b',20],
//   ['c',30]
// ])

// map.set('d',40)
// map.set({name: 'sajib'},  45)
// map.delete('c')

// console.log(map.size)
// console.log(map)

// console.log(map.get('b'))
// console.log(map.keys())
// console.log(map.values())
// console.log(map.entries())

// for (let [k,v] of map){
//   console.log(k,v)
// }

// map.forEach((v,k) => {
//   console.log(k,v)
// })


// //What is Weak Set

//  let a = {a:10}, b = {b:20}

// console.log(weakSet.has(a))
// let weakSet = new WeakSet([a,b])

// a = null
// console.log(weakSet.has(b))



// //What is Weak Map
// let a = {a:10}, b = {b:20}

// let weakMap = new WeakMap([[a,45],[b,75]])

// a = null

// console.log(weakMap.get(a))
// console.log(weakMap.has(a))
// console.log(weakMap.has(b))




// //New Class Syntax in ES6

// class Rectangle{
//   constructor(width,height){
//     this.width = width
//     this.height = height
//   }

//   draw(){
//     console.log('Drawing')
//   }

// }

// let rect1 = new Rectangle(45,75)
// console.log(rect1)



//ES6 Class Properties

class Rectangle{
  constructor(width,height){
    this.width = width
    this.height = height
    this.another = function(){

    }
  }

  name = 'Sajib Mahmud'

  test2 = function(){

  }
  draw(){
    console.log('Drawing')
  }

}


let rect1 = new Rectangle(10,30)
console.log(rect1)


//ES6 Static Method

class Person{
  constructor(name,email){
    this.name = name
    this.email = email
  }

  print(){
    console.log(this.name,this.email)
  }

  test(){
    console.log(this)
  }

  static create(str){
    let person = JSON.parse(str)
    return new Person(person.name,person.email)
  }

}

let str = `{"name": "Sajib Mahmud", "email": "utshaw1995@gmail.com"}`

let p1 = Person.create(str)
console.log(p1)
console.log(p1 instanceof Person)
p1.print()

let test = p1.test

test()