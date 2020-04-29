// //Basic Selectors in DOM Manipulation

// let title = document.getElementById('title')
// console.log(title)

// let paragraphs = document.getElementsByClassName('lead')
// console.log(paragraphs)

// let lists = document.getElementsByTagName('li')
// console.log(lists)

// let listItemOne = document.getElementsByName('list-item-one')
// console.log(listItemOne)




//Query Selectors in DOM Manipulation

let title = document.querySelector('#title')
console.log(title)

let paragraph = document.querySelector('.lead')
console.log(paragraph)

let paragraphs = document.querySelectorAll('.lead')
console.log(paragraphs)

let lists = document.querySelectorAll('li')
console.log(lists)

let listItemOne = document.querySelector('[name^="list-item-one"]')
console.log(listItemOne)