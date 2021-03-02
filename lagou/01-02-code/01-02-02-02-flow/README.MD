## use

yarn add flow-bin --dev

使用 `yarn flow init` 初始化flow 配置文件

yarn flow  检测文件，第一次比较慢，会后台起服务，关闭使用 `yarn flow stop`

但是源文件是无法正常运行的，需要使用工具移除注解

yarn add flow-remove-types --dev

运行 `yarn flow-remove-types . -d dist` 将移除后文件放到dist目录

### 使用babel移除注解
yarn add @babel/core @babel/cli @babel/preset-flow --dev

在 `.babelrc` 文件里
```json
{
  "presets": ["@babel/preset-flow"]
}
```

yarn babel src -d dist

### 开发工具插件
vscode  --> Flow Language Support
[https://flow.org/en/docs/editors](不同编辑器对应插件)

[https://www.saltycrane.com/cheat-sheets/flow-type/latest](查询flow类型)
