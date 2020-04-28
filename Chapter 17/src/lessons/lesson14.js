//Functionalities Came With Promise 


// const delay = s => new Promise(resolve => setTimeout(resolve,s*1000))

// delay(2).then(() => console.log('2 seconds delay'))
// delay(3).then(() => console.log('3 seconds delay'))
// delay(1).then(() => console.log('1 seconds delay'))
// delay(5).then(() => console.log('5 seconds delay'))
// delay(4).then(() => console.log('4 seconds delay'))


// let p1 = Promise.resolve('test')
// p1.then(v => console.log(v))

// let p2 = Promise.reject('reject')
// p2.catch(e => console.log(e))



// let p1 = Promise.resolve('one')
// let p2 = Promise.resolve('two')
// let p3 = Promise.resolve('three')

// let promiseArr = [p1,p2,p3]

// Promise.all(promiseArr)
// .then(arr => {
//   console.log(arr)
// })


let p1 = new Promise(resolve => {
  setTimeout(resolve,5000,'one')
})
let p2 = new Promise(resolve => {
  setTimeout(resolve,3000,'two')
})
let p3 = new Promise(resolve => {
  setTimeout(resolve,4000,'three')
})

let promiseArr = [p1,p2,p3]

Promise.all(promiseArr)
.then(arr => console.log(arr))

Promise.race(promiseArr)
.then(v => console.log(v))