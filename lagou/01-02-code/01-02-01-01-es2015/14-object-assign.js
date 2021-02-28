// Object.assign 方法

const source1 = {
  a: 123,
  b: 123
}

const target = {
  a: 456,
  c: 456
}

const result = Object.assign(target, source1)

console.log(target)
console.log(result === target)
