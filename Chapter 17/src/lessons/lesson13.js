//Implement Your Own Version Of Fetch API



 const BASE_URl = 'https://jsonplaceholder.typicode.com'

// fetch(`${BASE_URl}/users/1`)
// .then(res => res.json())
// .then(data => {
//   console.log(data)
//   return Promise.resolve('something')
// })
// .then(str => {
//   console.log(str)
//   return Promise.resolve('Another promise')
// })
// .then(another => {
//   console.log(another)
// })

// .catch(e => {
//   console.log(e)
// })




function getRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)

    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.response)
          resolve(response)
        } else {
          reject(new Error('Error occurred'))
        }
      }
    }
    xhr.send()
  })
}

getRequest(`${BASE_URl}/users/1`)
.then(res => {
  console.log(res)
})
.catch(e => {
  console.log(e.massage)
})