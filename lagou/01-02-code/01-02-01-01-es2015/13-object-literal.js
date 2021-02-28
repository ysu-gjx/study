// 对象字面量

const bar = '123'

const obj = {
  foo: 123,
  // bar: bar
  bar,
  // method1: function () {
  //   console.log('method1')
  // },
  method1 () {
    console.log('method1')
  },
  [bar]: 222
}