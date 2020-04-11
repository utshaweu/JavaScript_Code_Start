var a = 'abc'

// if(true){
//   if(true){
//     var b = 'bcd'
//   }
// }
// console.log(b)


function x(){
  var a = 10
  function y(){
    var b = 'I am B'
    console.log(b)
  }
  console.log(a)
  y()
}
x()

function test(n){

  function a(){
    return n%3 === 0
  }

  function b(){
    return n%5 === 0
  }

  if (a() && b()){
    console.log(n + ' is divisible by both 3 and 5')
  }else{
    console.log('Not a valid number')
  }
}
 
test(15)
test(50)