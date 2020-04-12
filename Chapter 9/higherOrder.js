// 5. We can pass function as an arguments


function add (a,b){
  return a+b
}

function manipulate(a,b,func){
  var c = a+b
  var d = a-b

  function multiply(){
    var m = func(a,b)
    return c*d*m
  }
  return multiply
}
var multiply = manipulate(3,4,add)
console.log(multiply())

// 6. We can return function from another function 
function add (a,b){
  return a+b
}

function manipulate(a,b,func){
  var c = a+b
  var d = a-b

  return function (){
    var m = func(a,b)
    return c*d*m
  }
}
var multiply = manipulate(7,4,add)
console.log(multiply())