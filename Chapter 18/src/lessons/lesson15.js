//Introducing Events in DOM Manipulation

let btn = document.getElementById('btn')

// btn.onclick = function(e){
//   console.log(e)
// }


let list = document.getElementById('list')
btn.addEventListener('click',function(e){ 
  let item = list.lastElementChild.cloneNode(true)
  item.innerHTML = 'Newly Created Item'
  list.appendChild(item)
})


//Event Delegation in DOM Manipulation

list.addEventListener('click',function(e){
  if(this.contains(e.target)){
    e.target.remove()
  }
})



let box = document.getElementById('box')
box.addEventListener('mousemove',function(e){
  document.getElementById('x-value').innerHTML = e.offsetX
  document.getElementById('y-value').innerHTML = e.offsetY
  if(e.offsetX === 50 & e.offsetY){
    alert('50 50')
  }
})