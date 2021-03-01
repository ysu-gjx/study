// static 方法
// 因为静态方法是挂载到类上面的 所以静态方法里面的this 就不会指向具体实例，而是指向类

class Person {
  static create (name) {
    console.log(this)
    return new Person(name)
  }

  constructor (name) {
    this.name = name
  }

  say () {
    console.log(`hi, my name is ${this.name}`)
  }
}

let p = Person.create('zs')
p.say()