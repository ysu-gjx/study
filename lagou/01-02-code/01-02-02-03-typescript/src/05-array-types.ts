// 数组类型

const arr1: Array<number> = [1, 2, 3]

const arr2: number[] = [1, 2, 3]

// ----------------
function sum (...args: number[]) {
  return args.reduce((acc, cur) => {
    return acc + cur
  }, 0)
}

console.log(sum(1, 2, 3))


