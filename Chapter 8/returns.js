function addAll(){
  var sum = 0
  for(var i= 0; i<arguments.length; i++){
    sum += arguments[i]
  }
  return sum
}

var p = addAll(1,2,3)
console.log(p)

function person(name,email){
  return {
    name: name,
    email: email
  }
}
var p1 = person('sajib','utshaw1995@gmail')
console.log(p1)