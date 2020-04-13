var persons = [
  {
    name: 'A',
    age : 24
  },
  {
    name: 'B',
    age: 19
  },
  {
    name: 'C',
    age: 26
  },
  {
    name: 'D',
    age: 21
  }
]

var arr = [4,8,1,6,7,9,4,3,5,6,8,2,1,7,-8,-2,-4,0]

// Sort function


// arr.sort()
// console.log(arr)
// persons.sort()
// console.log(persons)

//Assending Order
arr.sort(function(a,b){
  if(a > b){
    return 1
  }else if(a < b){
    return -1
  }else {
    return 0
  }
})
console.log(arr)

//Desending Order
arr.sort(function(a,b){
  if(a > b){
    return -1
  }else if(a < b){
    return 1
  }else {
    return 0
  }
})
console.log(arr)


persons.sort(function(a,b){
  if(a.age > b.age){
    return 1
  }else if(a.age < b.age){
    return -1
  }else{
    return 0
  }
})
console.log(persons)

//Every Function

var rest1 = arr.every(function(value){
  return value % 2 === 1
})
console.log(rest1)

var rest2 = arr.every(function(value){
  return value >= 0
})
console.log(rest2)

//Some Function 

var rest3 = arr.some(function(value){
  return value % 2 === 1
})
console.log(rest3)

var rest4 = arr.some(function(value){
  return value < 0
})
console.log(rest4)