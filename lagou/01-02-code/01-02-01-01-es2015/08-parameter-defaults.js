// 函数参数的默认值

// function foo (enable) {
//   // enable = enable || true
//   enable = enable === undefined ? true : enable
//   console.log('foo invoked - enable: ')
//   console.log(enable)
// }

function foo (enable = true) {
  console.log('foo invoked - enable: ')
  console.log(enable)
}

foo()