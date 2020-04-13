var arr = [7, 4, 8, 6, 9, 2, 1, 70, 3]


// //Find Function
// var result = arr.find(function(value){
//   return value === 9
// })
// console.log(result)

// //FindIndex Function
// var result = arr.findIndex(function(value){
//   return value === 9
// })
// console.log(result)

//Implementation

function myFind(arr, cb) {
  for (var i = 0; i<arr.length; i++){
    if(cb(arr[i])){
      // return arr[i] // Value return korbe
      return i // Index return korbe
    }
  }
}

var result = myFind(arr,function(value){
  return value === 9
})
console.log(result)