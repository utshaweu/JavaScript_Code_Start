// function something(greet,name){
//   function sayHi(){
//     console.log(greet,name)
//   }
//   sayHi()
// }
// something('Good Morning', 'Sajib Mahmud')

function something(greet,name){
  function getFirstname(){
    if(name){
      return name.split(' ')[0]
    }
    else{
      return ' '
    }
  }
  var message = greet + ' ' + getFirstname()
  console.log(message)
}

something('Good morning', 'Sajib Mahmud')