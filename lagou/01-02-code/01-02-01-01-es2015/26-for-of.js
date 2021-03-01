// for ... of 循环   实现 Iterable 接口是for...of 的前提

const arr = [100, 200, 300, 400]

// for (const item of arr) {
//   console.log(item)
//   if (item > 100) {
//     break
//   }
// }

// arr.forEach() // 不能跳出循环

// const s = new Set(['foo', 'bar'])
// for (const item of s) {
//   console.log(item)
// }

// const m = new Map()
// m.set('foo', '123')
// m.set('bar', '456')

// for (const [key, value] of m) {
//   console.log(key, value)
// }


const obj = {
  foo: 123,
  bar: 456
}
for (const item of obj) {
  console.log(item)
}