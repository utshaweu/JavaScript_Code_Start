var arr = [5,6,10,15,20,43]

var find = 10
var isFound = false

for (var i = 0; i< arr.length; i++){
  if (arr[i] == find){
    console.log('Date found at index ' + i)
    isFound = true
    break
  }
}

if(!isFound){
  console.log('Data Not Found')
}