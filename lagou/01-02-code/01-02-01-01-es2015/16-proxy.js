// Proxy 对象

let person = {
  name: 'zs',
  age: 18
}

let personProxy = new Proxy(person, {
  get (target, property) {
    // console.log(target, property)
    return property in target ? target[property] : undefined
    // return 100
  },
  set (target, property, newValue) {
    if (property === 'age') {
      if (!Number.isInteger(newValue)) {
        throw new TypeError(`${newValue} is not an int.`)
      }
    }
    console.log(target, property, newValue)
    target[property] = newValue
  }
})

console.log(personProxy.xx)
personProxy.age = 30
console.log(personProxy.age)

