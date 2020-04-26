//Error in JavaScript

// let n = 10

// if(n > 5){
//   throw new Error('N is greater than 5')
// }


// let n = 56

// if(n > 50){
//   throw new RangeError('The Number is Too Long...')
// }

// console.log(a)




// //Error Handling with If Else

// function changeToInt(v){
//   let result = Number.parseInt(v)
//   if(!result){
//     return 'Please provide a value which is able to convert in Integer'
//   }
//   return result
// }

// let result = changeToInt('65.85')
// console.log(result)



// // Error Handling With Try Catch

// function makeWords(text){
//   try{
//     let str = text.trim()
//     let words = str.split(' ')
//     return words
//   }catch(e){
//     console.log('Please Provide a Valid Number')
//   }
// }

// let words = makeWords(86)
// console.log(words)


//Throwing an Error

// try{
//   console.log('I am Line 1')
//   throw new Error('I am Your Error')
//   console.log('I am Line 2')
//   console.log('I am Line 3')
// }catch{
//   console.log('This is a custom error message ')
// }finally{
//   console.log('I am Your Finally Block')
// }


// How to create Custom Error

class customError extends Error{
  constructor(msg){
    super(msg)
    if(Error.captureStackTrace){
      Error.captureStackTrace(this,customError)
    }
  }
}

try{
  console.log('I am Line 1')
  throw new customError('I am Your Error')
  console.log('I am Line 2')
  console.log('I am Line 3')
}catch(e){
  console.log(e.message)
  console.log('This is a custom error message ')
}finally{
  console.log('I am Your Finally Block')
}