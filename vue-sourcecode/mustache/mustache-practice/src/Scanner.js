
// 扫描器 Scanner
export default class Scanner {
  constructor(templateStr) {

    // 保存 字符串模板
    this.templateStr = templateStr
    // pos 当前扫描位置
    this.pos = 0
    // 尾巴 
    this.tail = templateStr
  }

  // scan
  scan(tag) {
    if (this.tail.indexOf(tag) === 0) {
      this.pos += tag.length

      // 改变tail
      this.tail = this.templateStr.substring(this.pos)
    }
  }

  // scanUntil 扫描字符模板  并返回截取内容
  scanUntil(endTag) {
    // 记录当前扫描位置
    const pos_backup = this.pos

    // 扫描
    while(!this.eos() && this.tail.indexOf(endTag) != 0) {
      this.pos++

      // 改变尾巴
      this.tail = this.templateStr.substring(this.pos)
    }

    return this.templateStr.substring(pos_backup, this.pos)
  }

  // eos  end of string 判断是否到头
  eos() {
    return this.pos >= this.templateStr.length
  }
}