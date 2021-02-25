// Promise 方式的 AJAX

function ajax (url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = function() {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

ajax('/api/users.json').then(function onFulfilled(res){
  console.log(res)
}, function onRejected(err) {
  console.log(err)
})

ajax('/api/users.json2')
  .then(res => {
    console.log('onFulfilled', res)
  })
  .catch(err => {
    console.log('onRejected', err)
  })
