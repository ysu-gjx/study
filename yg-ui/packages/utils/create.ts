// block 代码块   element 元素  modifier 装饰  state 状态
// z-button 
// z-button__element
// z-button__element--disabled
// is-checked  is-enabled


// :class={bem.b('button)}

// 前缀名字
function _bem(prefixName:string) {

}

function createBEM(prefixName: string) {
  const b = () => ``
}

function createNamespace(name: string) {
  const prefixName = `z-${name}`

  return createBEM(prefixName)
}

const bem = createNamespace('button')

