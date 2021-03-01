// Proxy 对比 Object.defineProperty()  ================
//Object.defineProperty() 只能监视对象的读写操作  Proxy 有更多操作
/**
 *    handler 方法                      触发方式
 *    get                             读取某个属性
 *    set                             写入某个属性
 *    has                             in 操作符
 *    deleteProperty                  delete 操作符
 *    getPrototypeOf                  Object.getPrototypeOf()
 *    setPrototypeOf                  Object.setPrototypeOf()
 *    isExtensible                    Object.isExtensible()
 *    preventExtensions               Object.preventExtensions()
 *    getOwnPropertyDescriptor        Object.getOwnPropertyDescriptor()
 *    defineProperty                  Object.defineProperty()
 *    ownKeys                         Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()
 *    apply                           调用一个函数
 *    construct                       用 new 调用一个函数
 */

const person = {
  name: 'zs',
  age: 20
}

const personProxy = new Proxy(person, {
  deleteProperty (target, property) {
    console.log('delete', property)
    delete target[property]
  }
})

delete personProxy.name
console.log(person)


// 对数组更好的监视

const list = []
const listProxy = new Proxy(list, {
  set (target, property, newValue) {
    console.log('set', property, newValue)
    target[property] = newValue
    return true // 表示设置成功
  }
})

listProxy.push(100)
listProxy.push(100)
console.log(list)

// Proxy 是以非侵入的方式监控
