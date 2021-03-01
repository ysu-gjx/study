// Symbol 补充

// console.log(
//   Symbol('foo') === Symbol('foo')
// )

// const s1 = Symbol.for('foo')
// const s2 = Symbol.for('foo')
// console.log(s1 === s2)

// console.log(Symbol.iterator)
// console.log(Symbol.hasInstance)

// const obj = {
//   [Symbol.toStringTag]: 'XObject'
// }
// console.log(obj.toString())

const obj = {
  [Symbol()]: 'symbol value',
  foo: 'normal value'
}

for (let key in obj) {
  console.log(key)
}
console.log(Object.keys(obj))
console.log(JSON.stringify(obj))

console.log(Object.getOwnPropertySymbols(obj))
