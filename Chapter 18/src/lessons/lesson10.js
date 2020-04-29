//How to Create DOM Elements


function createElement(tagName,className,innerHTML){
  let tag = document.createElement(tagName)
  tag.innerHTML = innerHTML || ''
  tag.className = className || ''
  return tag
}

function append(parent,children){
  children.forEach(child => parent.appendChild(child))
}

let li = createElement('li','list-group-item','Four')
li.setAttribute('title','I am Fourth Item')

let list = document.getElementById('list')
list.appendChild(li)

let p1 = createElement('p','lead','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')

let p2 = createElement('p','lead','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')

let div = createElement('div')
append(div,[p1,p2])

// let container = document.getElementById('cont')
// container.appendChild(div)


//Insert Created Element Using Adjacent Element


// list.insertAdjacentElement('beforebegin',div)
// list.insertAdjacentElement('afterbegin',div)
// list.insertAdjacentElement('beforeend',div)
list.insertAdjacentElement('afterend',div)