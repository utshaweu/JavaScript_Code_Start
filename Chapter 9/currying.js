function add(a,b,c){
  return a+b+c
}
// console.log(add(4,5,6))

function currying(a){
  return function(b){
    return function(c){
      return a+b+c
    }
  }
}
var sum = currying(5)(10)(15)
console.log(sum)