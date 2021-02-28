
var elements = [{}, {}, {}]

// for (var i = 0; i < elements.length; i++) {
//   elements[i].onclick = function () {
//     console.log(i)
//   }
// }
// elements[0].onclick()  

for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    console.log(i)
  }
}
elements[1].onclick()  

for (let i = 0; i < 3; i++) {
  let i = 'foo'
  console.log(i)
}

let i = 0

if (i < 3) {
  let i = 'foo'
  console.log(i)
}
i++

if (i < 3) {
  let i = 'foo'
  console.log(i)
}
i++

if (i < 3) {
  let i = 'foo'
  console.log(i)
}
i++