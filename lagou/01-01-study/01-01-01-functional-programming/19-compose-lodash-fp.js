// lodash 和 lodash/fp 模块中 map 方法的区别

const fp = require('lodash/fp')
const _ = require('lodash')

let r = _.map([23, 8, 10], parseInt)
// parseInt('23', 0, array)
// parseInt('8', 1, array)
// parseInt('10', 2, array)

let c = fp.map(parseInt, [23, 8, 10])

console.log(r)
// [23, NaN, 2]

console.log(c)
// [23, 8, 10]

