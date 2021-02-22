// lodash 的 fp 模块
// NEVER SAY DIE --> never-say-die
const fp = require('lodash/fp')
// fp模块提供的方法 函数优先，数据滞后

const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))

console.log(f('NEVER SAY DIE'))
