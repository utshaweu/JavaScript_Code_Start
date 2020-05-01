//How To Handle from data in DOM


let form = document.getElementById('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  let isValid = false
  let formData = {};
  [...this.elements].forEach(el => {
    if (el.type !== 'submit') {
      isValid = validator(el)
      if (isValid) {
        formData[el.name] = el.value
      } else {
        el.classList.add('is-invalid')
        //alert(`${el.name} is Requried`)
      }
    }
  })
  if (isValid) {
    console.log(formData)
    this.reset()
  }
})


//How to validate From Data in DOM

function validator(el) {
  if (!el.value) {
    return false
  }
  return true
}