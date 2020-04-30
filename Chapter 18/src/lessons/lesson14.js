//How to work with Styles in DOM

let styleObj = {
  background : 'black',
  fontSize: '30px',
  color: '#efefef'
}

let list = document.getElementById('list');

[...list.children].forEach( li => Object.assign(li.style,styleObj))

// Object.assign(list.style,styleObj)