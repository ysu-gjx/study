// 类的访问修饰符

export {} // 确保跟其他示例没有成员冲突

class Person {
  name: string // = 'init name'
  private age: number
  protected gender: boolean  // 运行在子类里面访问

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }
  sayHi (msg: string): void {
    console.log(`I am ${this.name}, ${msg}`)
    console.log(this.age)
  }

}

class Student extends Person {
  private constructor (name: string, age: number) {
    super(name, age)
    console.log(this.gender)
  }

  static create (name: string, age: number) {
    return new Student(name, age)
  }
}

const tom = new Person('tom', 18)
console.log(tom.name)
// console.log(tom.age)
