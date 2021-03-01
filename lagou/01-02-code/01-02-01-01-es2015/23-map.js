// Map 数据结构

// const obj = {}
// obj[true] = 'value'

// obj[123] = 'value'
// obj[{a: 1}] = 'value'

// console.log(Object.keys(obj))
// console.log(obj['[object Object]']) // value

const m = new Map()

const tom = {name: 'tom'}

m.set(tom, 90)
console.log(m)

console.log(m.get(tom))
// m.has()
// m.delete()
// m.clear()

m.forEach((value, key) => {
  console.log(value, key)
})
