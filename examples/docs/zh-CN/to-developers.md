## 写给组件维护的开发者，有些开发规范约定

仔细阅读下Element 官方的[开发者文档](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.zh-CN.md)。

### 关于开发环境的搭建

需要 Node.js 4+，yarn 和 npm 3+。

注意：我们使用 yarn 进行依赖版本的锁定，所以请不要使用 npm install 安装依赖。

如果不用yarn做依赖版本管理，直接用npm，最后打出来的包，会有异常。