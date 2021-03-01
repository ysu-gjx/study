// 迭代器 （Iterator）

const s = new Set(['foo', 'bar', 'baz'])

// const iterator = s[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// 实现可迭代接口（Iterable）

const obj = {
  store: ['foo', 'bar', 'baz'],
  [Symbol.iterator]: function () {
    let index = 0
    const self = this
    return {
      next: function () {
        const result = {
          value: self.store[index],
          done: index >= self.store.length
        }
        index++
        return result
      }
    }
  }
}

for(const item of obj) {
  console.log('循环体', item)
}

