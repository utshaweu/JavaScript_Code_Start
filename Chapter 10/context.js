function a(){
  b()
  console.log('I am Function A')
}

function b(){
  d()
  console.log('I am Function B')
}

function c(){
  console.log('I am Function C')
}

function d(){
  c()
  console.log('I am Function D')
}
var a = 100
a()
console.log('I am global')


//Execution Of C Function
//Execution Of D Function
//Execution Of B Function
//Execution Of A Function
//Execution of global Context