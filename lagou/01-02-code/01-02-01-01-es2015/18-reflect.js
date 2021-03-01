// Reflect 对象  统一的对象操作API
// Reflect 属于一个静态类 类似Math  ,内部封装了一系列对对象的底层操作
// Reflect  成员方法就是Proxy 处理对象的默认实现


const obj = {
  foo: '123',
  bar: '456'
}

const proxy = new Proxy(obj, {
  // 当我们没有定义get 方法  就等同于下面的实现
  // 所以我们处理应该 先实现 监视逻辑，然后用Reflect 返回处理结果
  get (target, property) {
    console.log('watch logic~')
    return Reflect.get(target, property)
  }
})

console.log(proxy.foo)

// 统一了操作对象Api

const obj2 = {
  name: 'zs',
  age: 18
}
// console.log('name' in obj2)
// console.log(delete obj2['age'])
// console.log(Object.keys(obj2))

console.log(Reflect.has(obj2, 'name'))
console.log(Reflect.deleteProperty(obj2, 'age'))
console.log(Reflect.ownKeys(obj2))
