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



//Generator Function

let obj = {
  start: 1,
  end: 5,
  [Symbol.iterator]: function* (){
    let currentValue = this.start
    while(currentValue <= this.end){
      yield currentValue++
    }
  }
}
let iterate = obj[Symbol.iterator]()
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())

let arr =[1,2,3]

function* generator(collection){
  for(let i = 0;i<collection.length;i++){
    yield collection[i]
  }
}
let it = generator(arr)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())