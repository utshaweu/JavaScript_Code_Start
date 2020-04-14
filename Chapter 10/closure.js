// able to remember and access it's lexical scope


// function test(){
//   var msg = 'I am Learning Lexical Scope and Closure'
//   function sayMsg(){
//     console.log(msg)
//   }
//   sayMsg()
// }
// test()

// when that function executing outside it's lexical scope

// function test(){
//   var msg = 'I am Learning Lexical Scope and Closure'

//   return function(){
//     console.log(msg)
//   }
// }
// var sayMsg = test()
// sayMsg()



//Closure and Loops

for(var i = 1; i<= 5; i++){
  (function(n){
    setTimeout(function(){
      console.log(n)
    }, 1000*n)
  })(i)
}
