<script>
  export default {
    data() {
      return {
        active: 0,
        active1: 1,
        active2: 1,
        active3: 0,
        active4: 0,
        active5: 0,
        active6: 0,
        active7: 0,
        finishStatusActive: 1,
        horizontalStatusActive: 0,
        lotStepActive: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      next1() {
        if (this.active1++ > 2) this.active1 = 0;
      },
      next2() {
        if (this.active2++ > 2) this.active2 = 0;
      },
      next3() {
        if (this.active3++ > 3) this.active3 = 0;
      },
      next4() {
        if (this.active4++ > 2) this.active4 = 0;
      },
      next5() {
        if (this.active5++ > 2) this.active5 = 0;
      },
      next6() {
        if (this.active6++ > 2) this.active6 = 0;
      },
      next7() {
        if (this.active7++ > 2) this.active7 = 0;
      },
      nextTitleHorizontal() {
        if (this.horizontalStatusActive++ > 3) this.horizontalStatusActive = 0;
      },
      nextLotStepActive() {
        if (this.lotStepActive++ > 6) this.lotStepActive = 0;
      }
    }
  }
</script>

## Steps 步骤条
引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

### 带图标的横向的，并且带状态的步骤条(默认都是使用这个)
步骤条内可以启用序号和文字或者 icon 和文字在同一行的样式风格，该条件下 align-center / description / direction / space 都将失效。

:::demo 通过`title-direction`属性来设置 icon 和文字横向分布，默认是 vertical，为了不影响原本的使用，需要采用新版步骤条时，需要手动设置属性 `title-direction` 的值为 `horizontal`
```html
<h3>无描述</h3>
<el-steps :active="horizontalStatusActive" title-direction="horizontal" finish-status="success">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
  <el-step title="步骤 4"></el-step>
</el-steps>
<h3>有描述</h3>
<el-steps :active="horizontalStatusActive" title-direction="horizontal" finish-status="success">
  <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 4" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
<br>
<br>
<h3>这里只是演示当设置 finish status 和 progress status 时的实际效果</h3>
<h3>完成的各类状态效果（wait / process / finish / error）</h3>
<el-steps :active="horizontalStatusActive" title-direction="horizontal" finish-status="wait">
  <el-step title="步骤 1(wait)" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 4" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
<el-steps :active="horizontalStatusActive" title-direction="horizontal" finish-status="process">
  <el-step title="步骤 1(process)" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 4" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
<el-steps :active="horizontalStatusActive" title-direction="horizontal" finish-status="finish">
  <el-step title="步骤 1(finish)" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 4" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
<el-steps :active="horizontalStatusActive" title-direction="horizontal" finish-status="error">
  <el-step title="步骤 1(error)" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 4" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
<h3>进行中的各类状态效果（wait / process / finish / error）</h3>
<el-steps :active="horizontalStatusActive" title-direction="horizontal" process-status="wait">
  <el-step title="步骤 1(wait)" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 4" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
<el-steps :active="horizontalStatusActive" title-direction="horizontal" process-status="process">
  <el-step title="步骤 1(process)" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 4" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
<el-steps :active="horizontalStatusActive" title-direction="horizontal" process-status="finish">
  <el-step title="步骤 1(finish)" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 4" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
<el-steps :active="horizontalStatusActive" title-direction="horizontal" process-status="error">
  <el-step title="步骤 1(error)" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 4" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
<el-steps :active="horizontalStatusActive" title-direction="horizontal" process-status="success">
  <el-step title="步骤 1(success)" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 4" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="nextTitleHorizontal">下一步</el-button>
<h3>自定义 icon</h3>
<el-steps :active="lotStepActive" title-direction="horizontal">
  <el-step title="cube 信息" icon="el-icon-edit" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="维度" icon="el-icon-upload" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="度量" icon="el-icon-picture" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="更新设置" icon="el-icon-phone-outline" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="表索引" icon="el-icon-sold-out" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="高级设置" icon="el-icon-news" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="概览" icon="el-icon-printer" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="nextLotStepActive">下一步</el-button>
```
:::

### 基础用法

简单的步骤条。

:::demo 设置`active`属性，接受一个`Number`，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置`space`属性即可，它接受`Boolean`，单位为`px`，如果不设置，则为自适应。设置`finish-status`属性可以改变已经完成的步骤的状态。
```html
<el-steps :active="active" finish-status="success">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>

<el-button style="margin-top: 12px;" @click="next">下一步</el-button>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
```
:::

### 含状态步骤条

每一步骤显示出该步骤的状态。

:::demo 也可以使用`title`具名分发，可以用`slot`的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。
```html
<template>
<el-steps :space="200" :active="active1" finish-status="success" process-status="process">
  <el-step title="已完成"></el-step>
  <el-step title="进行中"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next1">下一步</el-button>
<h3>结束状态和过程中状态每个值对应的效果</h3>
<p>finish-status: wait / process / finish / error / success</p>
<el-steps :space="200" :active="finishStatusActive" finish-status="wait">
  <el-step title="已完成(wait)"></el-step>
  <el-step title="进行中"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
<el-steps :space="200" :active="finishStatusActive" finish-status="process">
  <el-step title="已完成(progress)"></el-step>
  <el-step title="进行中"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
<el-steps :space="200" :active="finishStatusActive" finish-status="finish">
  <el-step title="已完成(finish)"></el-step>
  <el-step title="进行中"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
<el-steps :space="200" :active="finishStatusActive" finish-status="error">
  <el-step title="已完成(error)"></el-step>
  <el-step title="进行中"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
<el-steps :space="200" :active="finishStatusActive" finish-status="success">
  <el-step title="已完成(success)"></el-step>
  <el-step title="进行中"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
<p>process-status: wait / process / finish / error / success</p>
<el-steps :space="200" :active="finishStatusActive" process-status="wait">
  <el-step title="已完成"></el-step>
  <el-step title="进行中(wait)"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
<el-steps :space="200" :active="finishStatusActive" process-status="progress">
  <el-step title="已完成"></el-step>
  <el-step title="进行中(progress)"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
<el-steps :space="200" :active="finishStatusActive" process-status="finish">
  <el-step title="已完成"></el-step>
  <el-step title="进行中(finish)"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
<el-steps :space="200" :active="finishStatusActive" process-status="error">
  <el-step title="已完成"></el-step>
  <el-step title="进行中(error)"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
<el-steps :space="200" :active="finishStatusActive" process-status="success">
  <el-step title="已完成"></el-step>
  <el-step title="进行中(success)"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
</template>
```
:::

### 有描述的步骤条

每个步骤有其对应的步骤状态描述。

:::demo
```html
<el-steps :active="active2" process-status="error">
  <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这段就没那么长了"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next2">下一步</el-button>
```
:::

### 居中的步骤条

标题和描述都将居中。

:::demo
```html
<el-steps :active="active3" align-center>
  <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next3">下一步</el-button>
```
:::

### 带图标的步骤条
步骤条内可以启用各种自定义的图标。

:::demo 通过`icon`属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名`slot`来使用自定义的图标。
```html

<el-steps :active="active4">
  <el-step title="步骤 1" icon="el-icon-edit"></el-step>
  <el-step title="步骤 2" icon="el-icon-upload"></el-step>
  <el-step title="步骤 3" icon="el-icon-picture"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next4">下一步</el-button>
```
:::

### 竖式步骤条

竖直方向的步骤条。

:::demo 只需要在`el-steps`元素中设置`direction`属性为`vertical`即可。
```html
<div style="height: 300px;">
  <el-steps direction="vertical" :active="active5">
    <el-step title="步骤 1"></el-step>
    <el-step title="步骤 2"></el-step>
    <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  </el-steps>
</div>
<el-button style="margin-top: 12px;" @click="next5">下一步</el-button>
```
:::

### 简洁风格的步骤条
设置 `simple` 可应用简洁风格，该条件下 `align-center` / `description` / `direction` / `space` 都将失效。

:::demo
```html

<el-steps :active="active6" simple>
  <el-step title="步骤 1" icon="el-icon-edit"></el-step>
  <el-step title="步骤 2" icon="el-icon-upload"></el-step>
  <el-step title="步骤 3" icon="el-icon-picture"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next6">下一步</el-button>

<el-steps :active="active7" finish-status="success" simple style="margin-top: 20px">
  <el-step title="步骤 1" ></el-step>
  <el-step title="步骤 2" ></el-step>
  <el-step title="步骤 3" ></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next7">下一步</el-button>
```
:::

### Steps Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| space | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | — | — |
| direction | 显示方向 | string | vertical/horizontal | horizontal |
| active | 设置当前激活步骤  | number | — | 0 |
| process-status | 设置当前步骤的状态 | string | wait / process / finish / error / success | process |
| finish-status | 设置结束步骤的状态 | string | wait / process / finish / error / success | finish |
| align-center | 进行居中对齐 | boolean | - | false |
| simple | 是否应用简洁风格 | boolean | - | false |

### Step Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 标题 | string | — | — |
| description | 描述性文字 | string | — | — |
| icon | 图标 | 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入 | string | — |
| status | 设置当前步骤的状态，不设置则根据 steps 确定状态 | wait / process / finish / error / success | - |

### Step Slot
| name | 说明  |
|----|----|
| icon | 图标 |
| title | 标题 |
| description | 描述性文字 |
