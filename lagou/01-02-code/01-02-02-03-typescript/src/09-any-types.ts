// 任意类型 （弱类型）

export {} // 确保跟其他示例没有成员冲突

function stringify (value: any) {
  return JSON.stringify(value)
}

stringify('string')
stringify(100)
stringify(true)

let foo: any = 'string'

foo = 100

foo = true

