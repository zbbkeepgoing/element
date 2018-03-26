## 写给组件维护的开发者，有些开发规范约定

仔细阅读下Element 官方的[开发者文档](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.zh-CN.md)。

### 关于开发环境的搭建(极重要)

需要 Node.js 4+，yarn 和 npm 3+。

:::tip
注意：我们使用 yarn 进行依赖版本的锁定，所以请不要使用 npm install 安装依赖。

如果不用yarn做依赖版本管理，直接用npm，最后打出来的包，会有异常。
:::

### 关于scss变量
由于KAP项目组使用的是less框架，element 这个框架用的是scss，所以内部公共组件这版里是人工维护了一份less的变量文件在。当修改theme-chalk下的src/common/var.scss的内容时，需要同时维护该目录下的varless.less文件，并且到docs下，将base.md文件中示例更新。