// 函数类型

export {}

function func1 (a: number, b: number = 10, ...rest: number[]): string {
  return 'func1'
}

func1(100, 200)

// -------------
const func2: (a: number, b: number) => string = function (a: number, b: number): string {
  return 'func2'
}
