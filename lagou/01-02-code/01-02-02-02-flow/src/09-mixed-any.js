/**
 * Mixed Any
 * 
 * @flow
 */
// 强类型
function passMixed (value: mixed) {
  if (typeof value === 'string') {
    value.substr(1)
  }
  if (typeof value === 'number') {
    value * value
  }
}

passMixed('string')

passMixed(100)

//  ---------------------
// any 弱类型
function passAny (value: any) {
  value.substr(1)

  value * value
}

passAny('string')

passAny(100)

