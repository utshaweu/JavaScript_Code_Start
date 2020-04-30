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

// let p1 = createElement('p','lead','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')

// let p2 = createElement('p','lead','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')

// let div = createElement('div')
// append(div,[p1,p2])

// let container = document.getElementById('cont')
// container.appendChild(div)


//Insert Created Element Using Adjacent Element


// list.insertAdjacentElement('beforebegin',div)
// list.insertAdjacentElement('afterbegin',div)
// list.insertAdjacentElement('beforeend',div)
// list.insertAdjacentElement('afterend',div)




//Update And Remove any DOM Element

let firstchild = list.firstElementChild
setTimeout(() => {
  firstchild.innerHTML = firstchild.innerHTML + ' ' +'(Modified)'
  firstchild.classList.add('text-white')
  firstchild.style.background = '#16E6E6'
},5000)

// setTimeout(()=> {
//   list.lastChild.remove()
// },3000)


//How to Clone Node including It's Child Element

let lastItem = list.lastElementChild.cloneNode(true)
lastItem.innerHTML = 'Five'
list.appendChild(lastItem)


//How to deal with Attributes in DOM Manipulation

console.log(list.attributes)
console.log(list.getAttributeNames())
console.log(list.getAttributeNode('class'))
console.log(list.getAttribute('id'))


console.log(list.classList)
// lastItem.id = 'last-item'

// lastItem.setAttribute('id','last-item')


let attr = document.createAttribute('title')
attr.value = 'I am Title'
lastItem.setAttributeNode(attr)