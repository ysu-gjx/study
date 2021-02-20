// 柯里化案例  提取数组中指定内容

// ''.match(/\s+/g)
// ''.match(/\d+/g)

const _ = require('lodash')

const match = _.curry(function (reg, str) {
  return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)

console.log(haveSpace('hello world'))
console.log(haveNumber('123abc'))

const filter = _.curry((func, array) => array.filter(func))

const findSpace = filter(haveSpace)

console.log(findSpace(['john Connor', 'john_Donne']))

