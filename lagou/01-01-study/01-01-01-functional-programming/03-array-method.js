// 模拟常用高阶函数： map、every、some

// map
const map = (array, fn) => {
  let results = []
  for (let value of array) {
    results.push(fn(value))
  }
  return results
}

let arr = [1, 2, 3]
let r = map(arr, v => v * 2)
console.log(r)

// every
const every = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    if (!fn(array[i])) {
      return false
    }
  }
  return true
}

let arr2 = [1, 2, 3, 4]
let r2 = every(arr2, function(item) {
  return item > 0
})
console.log(r2)

// some
const some = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      return true
    }
  }
  return false
}

let arr3 = [1, 2, 3, 4]
let r3 = some(arr2, function(item) {
  return item > 4
})
console.log(r3)