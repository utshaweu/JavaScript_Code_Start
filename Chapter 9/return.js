function greet (msg){
  function greeting(name){
    return msg + ', ' + name + '!'
  }
  return greeting
}
var gm = greet('Good Morning')
// console.log(typeof gm)
var msg = gm('Sajib Mahmud')
console.log(msg)

//Power ber korar fuction
function base(b){
  return function(n){
    var result = 1
    for(var i = 0; i< b;i++){
      result *= n
    }
    return result
  }
}

var base10 = base(10)
console.log(base10(2))

var base5 = base(5)
console.log(base5(2))
console.log(base5(5))