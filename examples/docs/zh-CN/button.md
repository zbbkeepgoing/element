<script>
  module.exports = {
    data() {
      return {
        lang: 'zh-cn'
      }
    },
    methods: {
      changeLang (lang) {
        this.lang = lang
      }
    }
  }
</script>
<style>
  .demo-box.demo-button {
    .el-row {
      margin-bottom: 10px;
    }
    .el-button + .el-button {
      margin-left: 10px;
    }
    .el-button-group {
      margin-bottom: 20px;

      .el-button + .el-button {
        margin-left: 0;
      }

      & + .el-button-group {
        margin-left: 10px;
      }
    }
  }
</style>

## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`和`round`属性来定义 Button 的样式。

```html
<div>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</div>

<div style="margin: 20px 0">
  <el-button plain>朴素按钮</el-button>
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</div>

<div>
  <el-button round>圆形按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
  <el-button type="warning" icon="el-icon-delete" circle size="medium"></el-button>
  <el-button type="info" icon="el-icon-delete" circle size="small"></el-button>
  <el-button icon="el-icon-search" circle size="mini"></el-button>
</div>
```
:::

公司实际项目中用的比较多的几种按钮
<div>
<el-button>默认按钮</el-button>
<el-button type="primary">主要按钮</el-button>
<el-button plain>朴素按钮</el-button>
<el-button type="primary" plain>主要按钮</el-button>
<el-button round>圆形按钮</el-button>
<el-button type="primary" round>主要按钮</el-button>
</div>

删除等操作，在实际项目中用红色版本的按钮，好像不多，但我建议，类似删除这种操作，需要用红色危险按钮。
<div>
  <el-button type="danger">危险按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</div>

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<div>
  <el-button disabled>默认按钮</el-button>
  <el-button type="primary" disabled>主要按钮</el-button>
  <el-button type="success" disabled>成功按钮</el-button>
  <el-button type="info" disabled>信息按钮</el-button>
  <el-button type="warning" disabled>警告按钮</el-button>
  <el-button type="danger" disabled>危险按钮</el-button>
</div>

<div style="margin-top: 20px">
  <el-button plain disabled>朴素按钮</el-button>
  <el-button type="primary" plain disabled>主要按钮</el-button>
  <el-button type="success" plain disabled>成功按钮</el-button>
  <el-button type="info" plain disabled>信息按钮</el-button>
  <el-button type="warning" plain disabled>警告按钮</el-button>
  <el-button type="danger" plain disabled>危险按钮</el-button>
</div>
```
:::

### 文字按钮

没有边框和背景色的按钮。

:::demo 你可以使用`text`属性来定义按钮是否是文本样式，它接受一个`Boolean`值。
```html
<div style="margin: 20px 0">
  <el-button type="primary" text>主要按钮</el-button>
  <el-button type="success" text>成功按钮</el-button>
  <el-button type="info" text>信息按钮</el-button>
  <el-button type="warning" text>警告按钮</el-button>
  <el-button type="danger" text>危险按钮</el-button>
  <el-button type="info" text disabled>禁用按钮</el-button>
</div>
```
:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<el-button type="primary" icon="el-icon-edit"></el-button>
<el-button type="primary" icon="el-icon-share"></el-button>
<el-button type="primary" icon="el-icon-delete"></el-button>
<el-button type="primary" icon="el-icon-search">搜索</el-button>
<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<el-button-group>`标签来嵌套你的按钮。

```html
<div>
<el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
</el-button-group>
</div>
```
:::

### 按钮组 - 特殊场景 - 中英文切换

利用按钮组扩展出来的中英文切换按钮，因为`<el-button-group>`标签里面嵌套的也是`<el-button>`标签，所以可以利用属性size实现按钮的大小控制。
因为在实际使用中，中英文切换时，中文的键值对的健名是zh-cn，所以这边使用时，changLang的方法中参数要设置成zh-cn，class的判断处也是取值zh-cn。
主要是为了和语言配置这边搭配使用：

```js
// 下面是伪代码，只为说明
// VueI18n 配置处
import VueI18n from 'vue-i18n'
import enLocale from 'kyligence-ui/lib/locale/lang/en'
import zhLocale from 'kyligence-ui/lib/locale/lang/zh-CN'
import enKyAccountLocale from './locale/en'
import zhKyAccountLocale from './locale/zh-CN'
Vue.use(VueI18n)
enLocale.kyAccountLang = enKyAccountLocale.default
zhLocale.kyAccountLang = zhKyAccountLocale.default
Vue.locale('en', enLocale)
Vue.locale('zh-cn', zhLocale)

// 组件中的中英文配置处
locales: {
  'en': {
    text: 'text'
  },
  'zh-cn': {
    text: '文本'
  }
}
```
:::demo 支持的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们，默认是最大号的尺寸。

```html
<div>
<el-button-group>
  <el-button round @click="changeLang('en')" :class="{'active':lang=='en'}">EN</el-button>
  <el-button round @click="changeLang('zh-cn')" :class="{'active':lang=='zh-cn'}">中文</el-button>
</el-button-group>
<el-button-group>
  <el-button size="medium" round @click="changeLang('en')" :class="{'active':lang=='en'}">EN</el-button>
  <el-button size="medium" round @click="changeLang('zh-cn')" :class="{'active':lang=='zh-cn'}">中文</el-button>
</el-button-group>
<el-button-group>
  <el-button size="small" round @click="changeLang('en')" :class="{'active':lang=='en'}">EN</el-button>
  <el-button size="small" round @click="changeLang('zh-cn')" :class="{'active':lang=='zh-cn'}">中文</el-button>
</el-button-group>
<el-button-group>
  <el-button size="mini" round @click="changeLang('en')" :class="{'active':lang=='en'}">EN</el-button>
  <el-button size="mini" round @click="changeLang('zh-cn')" :class="{'active':lang=='zh-cn'}">中文</el-button>
</el-button-group>
</div>
<script>
  export default {
    data () {
      return {
        lang: 'zh-cn'
      };
    },
    methods: {
      changeLang (lang) {
        this.lang = lang
      }
    }
  }
</script>
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<el-button type="primary" :loading="true">加载中</el-button>
```
:::

加载中按钮样式，多数会和disable结合使用，常用场景是submit一个表单时，为防止重复提交，但点击一次后，请求还未返回前，按钮是处理加载中，且不可点状态，效果如下：
:::demo

```html
<el-button type="primary" :loading="true" disabled>提交中</el-button>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<div>
  <el-button>默认按钮</el-button>
  <el-button size="medium">中等按钮</el-button>
  <el-button size="small">小型按钮</el-button>
  <el-button size="mini">超小按钮</el-button>
</div>
<div style="margin-top: 20px">
  <el-button round>默认按钮</el-button>
  <el-button size="medium" round>中等按钮</el-button>
  <el-button size="small" round>小型按钮</el-button>
  <el-button size="mini" round>超小按钮</el-button>
</div>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| text     | 是否文字按钮   | boolean    | — | false   |
| round     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
