//Callback Not Always Mean Asynchronous

let arr = [1,2,3,4]

let sqrArr = arr.map(v => v * v)

console.log(sqrArr)

function asyncMap(arr,cb){
  return arr.map(v => {
    //setTimeout(cb.bind(null,v),0)
    setTimeout(() => cb(v),0)
  })
}

let qbArr = asyncMap(arr, v =>{
  console.log(v)
})

console.log(qbArr)