var a = 10
var b = 20
var c = 30
var d = 40

if (a > b && c > d){
  console.log("A is greater than B and C is greater than D")
}else {
  console.log("At least one false condition")
}

if (a > b || c > d){
  console.log("A is greater than B or C is greater than D")
}else {
  console.log("At least one false condition")
}

var check = !(a > b)
console.log(check)