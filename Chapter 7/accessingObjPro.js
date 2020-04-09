var point ={
  x : 10,
  y : 20,
  z : 30
}
console.log(point.x) // Dot notation
console.log(point.x + point.z)

console.log(point['x']) //Array notation
var show = 'z'
console.log(point[show])

// Setting Object Properties

var point2 = {
  a : 10,
  b : 20,
  c : 30
}
point2.a = 45
point2.b = 10
console.log(point2)
console.log(point2.d)

point2['f'] = 120
var show = 'g'
point2[show] = 100
console.log(point2)

//Remove Object Properties
point2.a = undefined
console.log(point2)
delete point2.a
console.log(point2)
