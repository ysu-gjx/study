// 对象的解构

const obj = {name: 'zs', age: 18}

// const {name} = obj

// console.log(name)

const name = 'tom'

const { name:objName = 'jack' } = obj
console.log(objName)

