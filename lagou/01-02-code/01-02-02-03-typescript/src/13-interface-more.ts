// 接口

export {} // 确保跟其他示例没有成员冲突

interface Post {
  title: string
  content: string
  subtitle?: string
  readonly summary: string
}

const hello: Post = {
  title: 'Hello TypeScript',
  content: 'A javascript superset',
  summary: 'A javascript'
}

// hello.summary = 'other'

// --------------
interface Cache {
  [key: string]: string
}

const cache: Cache = {}

cache.foo = 'foo'
cache.bar = 'bar'
