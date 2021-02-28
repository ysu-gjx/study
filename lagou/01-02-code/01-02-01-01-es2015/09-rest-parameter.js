// 剩余参数

// function foo () {
//   console.log(arguments)
// }

function foo (...args) {
  console.log(args)
}

foo(1,2,3,4)