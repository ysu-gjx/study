// IO 函子的问题
const fs = require('fs')
const fp = require('lodash/fp')

class IO {
  static of (value) {
    return new IO(function () {
      return value
    })
  }

  constructor (fn) {
    this._value = fn
  }

  map (fn) {
    return new IO(fp.flowRight(fn, this._value))
  }
}

const readFile = (filename) => {
  return new IO(function () {
    return fs.readFileSync(filename, 'utf-8')
  })
}

const print = (x) => {
  return new IO(function () {
    console.log(x)
    return x
  })
}

const cat = fp.flowRight(print, readFile)
// IO(IO(x))
let r = cat('package.json')._value()._value()

console.log(r)