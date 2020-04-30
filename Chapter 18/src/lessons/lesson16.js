//Input Events & Event Handling

let name = document.getElementById('name')

name.addEventListener('keypress',function(event){
  if (event.key === 'Enter'){
    document.getElementById('show-name').innerHTML = `Your name is ${event.target.value}`
    event.target.value = ''
  }
})

//Check Box and Event Handling

let skills = document.getElementsByName('skills')
let result = document.getElementById('result')

let checkedSkills = [];

[...skills].forEach(skill => {
  skill.addEventListener('change',function(event){
    if(event.target.checked){
      checkedSkills.push(event.target.value)
      outputSkills(result,checkedSkills)
    }else{
      let ind = checkedSkills.indexOf(event.target.value)
      checkedSkills.splice(ind,1)
      outputSkills(result,checkedSkills)
    }
  })
})


function outputSkills(parent,skills){
  let result = ''
  skills.forEach((skill,index) => {
    result += `(${index + 1}) ${skill}  `
  })
  parent.innerHTML = result
}


//List Item & Input Element Event Handling

let list = document.getElementById('list')

list.addEventListener('dblclick', function(event){
  if(this.contains(event.target)){
    let innerText = event.target.innerText
    event.target.innerHTML = ''
    let inputBox = createInputBox(innerText)
    event.target.appendChild(inputBox)

    inputBox.addEventListener('keypress', function(e){
      if (e.key === 'Enter'){
        event.target.innerHTML = e.target.value
      }
    })
  }
})

function createInputBox(value){
  let inp = document.createElement('input')
  inp.type = 'text'
  inp.className = 'form-control'
  inp.value = value
  return inp
}