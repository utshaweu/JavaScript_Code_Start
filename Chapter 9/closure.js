var b = 5

function a(){
  var x = 2

  return function(){
    console.log(x)
  }
}

var abc = a()
console.dir(abc)