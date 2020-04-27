//How to store result from Asyn function

function sayHiName(name){
  setTimeout(() => {
    console.log(name)
  },3000)
}

let output = sayHiName('Sajib Mahmud')
console.log(output)