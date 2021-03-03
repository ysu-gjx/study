## typeScript

yarn init --yes  生成 package.json 文件

### 安装 typescript
yarn add typescript --dev 

### 编译文件
yarn tsc 01-getting-started.ts

初始化配置文件 `yarn tsc --init` 生成 tsconfig.json 文件

 yarn tsc

` yarn tsc --locale zh-CN` 可以将错误消息显示中文(但是不建议使用)

yarn add @types/lodash --dev  可以安装对应库的类型声明模块，如果没有对应的可以用
`declare function camelCase (input: string): string` 声明

