// 数组的解构

const arr = [100, 200, 300]

// const foo = arr[0]
// const bar = arr[1]
// const baz = arr[2]
// console.log(foo, bar, baz)

// const [foo, bar, baz] = arr
// console.log(foo, bar, baz)

// const [foo, ...rest] = arr
// console.log(rest)

const [foo, bar, baz = 123, more = 'default value'] = arr
console.log(foo, bar, baz, more)
