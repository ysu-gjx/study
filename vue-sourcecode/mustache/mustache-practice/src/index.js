import Scanner from './Scanner.js'

window.YG_TemplateEngine = {
  render (templateStr, data) {

    let scanner = new Scanner(templateStr)

    let word

    while(!scanner.eos()) {
      word = scanner.scanUntil('{{')
      scanner.scan('{{')

      console.log(scanner.pos)
      console.log(word)

      word = scanner.scanUntil('}}')
      scanner.scan('}}')
      console.log(scanner.pos)
      console.log(word)
    }
    
  }
}