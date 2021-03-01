// Symbol 数据类型

// shared.js =============================

const cache = {}

// a.js ============

cache['foo'] = Math.random()

// b.js ============

cache['foo'] = '123'
console.log(cache)


// const s = Symbol()
// console.log(s)
// console.log(typeof s)

// console.log(Symbol('foo'))
// console.log(Symbol('bar'))

// a.js  ====================
const name = Symbol()
const person = {
  [name]: 'zs',
  say () {
    console.log(this[name])
  }
}
person.say()
// b.js  =========
// person[Symbol()]
// person.say()