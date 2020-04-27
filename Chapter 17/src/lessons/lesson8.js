//Handling XMlHttpRequest Using Callback

// const xhr = new XMLHttpRequest()
// xhr.open('get','http://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function(e){
//   if (xhr.readyState === 4){
//     if(xhr.status === 200){
//       let users = JSON.parse(xhr.response)
//       console.log(users)
//     }else{
//       console.log(xhr.status)
//     }
//   }
// }

// xhr.send()



function getRequest(url,callback){
  const xhr = new XMLHttpRequest()
  xhr.open('get', url)

  xhr.onreadystatechange = function(e){
    if (xhr.readyState === 4){
      if(xhr.status === 200){
        let response = JSON.parse(xhr.response)
        callback(null,response)
      }else{
        callback(xhr.status,null)
      }
    }
  }
  xhr.send()
}

getRequest('http://jsonplaceholder.typicode.com/users',(err,res) => {
  if(err){
    console.log(err)
  }else{
    console.log(res)
    res.forEach(r => console.log(r.name))
  }
})

getRequest('http://jsonplaceholder.typicode.com/posts',(err,res) => {
  if(err){
    console.log(err)
  }else{
    console.log(res)
    res.forEach(r => console.log(r.title))
  }
})