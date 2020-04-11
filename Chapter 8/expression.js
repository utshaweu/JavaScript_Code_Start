// anonymous function
var addition = function(a, b){
  return a + b
}
addition(7,10) 
// console.log(addition)


//asynchronous function
setTimeout(function(){
  console.log('I will return in 5 seconds')
},5000) 

var another = addition
console.log(another(7,8))