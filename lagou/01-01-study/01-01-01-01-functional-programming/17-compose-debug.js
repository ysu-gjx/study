// 函数组合 调试
// NEVER SAY DIE  -->  never-say-die

const _ = require('lodash')

// const log = v => {
//   console.log(v)
//   return v
// }

const trace = _.curry((tag, v) => {
  console.log(tag, v)
  return v
})

// _.split()
const split = _.curry((sep, str) => _.split(str, sep))

// _.toLower

// _.join()
const join = _.curry((sep, arr) => _.join(arr, sep))

const map = _.curry((fn, arr) => arr.map(fn))

const f = _.flowRight(join('-'), trace('map 之后'), map(_.toLower), trace('split 之后'), split(' '))

console.log(f('NEVER SAY DIE'))