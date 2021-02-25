/**
 * 1. Primise 就是一个类，在执行这个类的时候 需要传递一个执行器进去，执行器会立即执行
 * 2. primise 中有三种状态 分别为 等待 pending 成功 fulfilled  失败 rejected
 *    pending -> fulfilled
 *    pending -> rejected
 *    一旦状态确定就不可更改
 * 3. 通过resolve 和 reject 函数来更改状态
 *    resolve: fulfilled
 *    reject: rejected
 * 4. then 方法内部做的事情就是判断状态 
 *    如果状态是成功 调用成功的回调函数
 *    如果状态是失败 调用失败的回调函数
 * 5. then 成功回调有一个参数 表示成功之后的值 then失败回调 有一个失败的原因
 * 6. 同一个promise对象下面的then方法是可以被调用多次的
 * 7. then方法是可以被链式调用的, 后面then方法的回调函数拿到值的是上一个then方法的回调函数的返回值
 * 
 */

  // import MyPromise from './myPromise.js'
  const MyPromise = require('./myPromise')

  let promise = new MyPromise((resolve, reject) => {
    // setTimeout(function () {
    //   resolve('成功...')
    // }, 2500)
    resolve('成功')
    // reject('失败')
  })

  let other = () => {
    return new MyPromise((resolve, reject) => {
      resolve('other')
    })
  }

  promise.then(value => {
    console.log(value)
    return other()
  }).then(v => {
    console.log(v)
  })