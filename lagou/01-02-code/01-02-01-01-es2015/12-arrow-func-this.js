// 箭头函数 与 this  
// 箭头函数不会改变this指向,所以在箭头函数的外面 this 指什么，箭头函数的this就指什么，即指向作用域的this

const person = {
  name: 'tom',
  // sayHi: function () {
  //   console.log(`hi, my name is ${this.name}`)  // tom
  // }
  sayHi: () => {
    console.log(this)
    console.log(`hi, my name is ${this.name}`)  // undefined
  },
  // sayHiAsync: function () {
    // let _this = this
  //   setTimeout(function (){
  //     console.log(_this.name)
  //   }, 2000)
  // },
  sayHiAsync: function () {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}

person.sayHi()
person.sayHiAsync()