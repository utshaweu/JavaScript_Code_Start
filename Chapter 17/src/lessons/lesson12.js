//What is Promise, take a look at Promise

// let p1 = new Promise((resolve,reject) => {
//   setTimeout(resolve,5000,'One')
// })

// let p2 = new Promise((resolve,reject) => {
//   setTimeout(resolve,3000,'Two')
// })

// p1.then((v) => {
//   console.log(v)
// })

// p2.then((v) => {
//   console.log(v)
// })




function getIphone(isPassed){
  return new Promise((resolve,reject) => {
   setTimeout(() => {
    if(isPassed){
      resolve('I have got an Iphone')
    }else{
      reject(new Error('I have failed'))
    }
   },2000) 
  })
}

getIphone(true)
.then((res) => {
  console.log(res)
})
.catch((e) => {
  console.log(e.massage)
})