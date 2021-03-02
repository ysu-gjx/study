// javascript 弱类型产生的问题

// const obj = {}
// obj.foo()

// setTimeout(() => {
//   obj.foo() // 只有运行的时候才会报错
// }, 1000000)

// =========================
// function sum (a, b) {
//   return a + b
// }
// console.log(sum(100, 100))
// console.log(sum(100, '100'))

// ===========================

const obj = {}
obj[true] = 100
// 会将属性自动转化为字符串
console.log(obj['true'])


