// for (var i = 1; i < 10 ; i++){
//   console.log(i + " Sajib")
// }


// for (var i = 1 ; i < 100 ; i++){
//   if(i%2===0){
//     console.log(i)
//   }
// }

var sum = 0
for (var i = 1; i <=10 ; i++){
  if(i%2===0){
    console.log(sum + " + " + i  + " = " + (sum+i))
    sum += i
  }
}

console.log("Result is: " + sum)