// 函数组合演示
function compose (f, g) {
  return function (value) {
    return f(g(value))
  }
}

const reverse = arr => arr.reverse()
const first = arr => arr[0]

const last = compose(first, reverse)

console.log(last([1, 2, 3, 4]))