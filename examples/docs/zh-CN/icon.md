<script>
  var iconList = require('examples/icon.json');
  let multIconList = require('../../../src/iconfont/iconfont.json')

  const customIcons = (function () {
    const icons = ["workspace_22","edit_22","cluster_22","project_22","project_16","edit_r16","cluster_16","workspace_16","arrow_right_24","arrow_up_24","arrow_down_24","loading_24","arrow_left_24","add_22","arrow_down_22","add_with_border_22","arrow_left_22","arrow_table_down_22","arrow_left_L_22","arrow_table_right_22","arrow_up_22","close_22","bell_22","confirm_22","build_index_22","controller_22","document_22","export_22","code_22","arrow_right_22","edit_221","company_22","download_22","folder_22","language_22","filter_22","datatype_int&bigint_22","merge_22","license_22","minus_with_border_22","minus_22","more_22","nav_action_22","more_with_border_22","keychain_22","pause_22","datatype_meausre_22","loading_22","play_outline_22","play_fill_22","insigh_22","play_with_border_22","resure_22","pause_outline_22","refresh_22","help_22","hierachy_22","stop_fill_22","search_22","notbook_22","sample_22","repair_22","move_22","save_22","dup_22","redo_22","time_22","table_delete_22","stop_with_border_22","timestamp_22","table_rank_22","view_range_22","undo_22","view_22","system_config_22","wizard_22","0_placeholder_22","0_placeholder_16","arrow_table_right_16","arrow_down_16","close_16","arrow_up_16","build_index_16","company_16","datatype_meausre_16","datatype_nt&bigint_16","dup_16","edit_16","data_base_16","folder_16","document_16","help_with_border_16","loading_16","minus_16","more_with_border_16","keychain_16","more_16","notbook_16","move_16","hierarchy_16","play_outline_16","save_16","search_16","view_16","table_rank_16","view_range_16","time_16","table_delete_16","arrow_table_down_16","arrow_right_16","add_16","arrow_left_16"]
    let customIcons = []
    const temp = []

    icons.map(it => it.replace(/_\d+$/, '')).forEach(item => {
      !temp.includes(item) && temp.push(item)
    })

    const list = temp.sort((a, b) => a.charAt().charCodeAt() - b.charAt().charCodeAt())
    list.forEach(item => {
      const items = icons.filter(it => it.replace(/_\d+$/, '') === item)
      customIcons = [...customIcons, ...items]
    })
    return customIcons
  })()

  export default {
    data() {
      return {
        icons: iconList,
        multIcons: [...multIconList.glyphs],
        customIcons: customIcons
      };
    }
  }
</script>
<style>
  .demo-icon .source > i {
    color: #606266;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  
  .demo-icon .source > button {
    margin: 0 20px;
  }

  .page-component .content > ul.icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;

    @utils-vertical-center;

    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
      color: #99a9bf;
    }
    
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #606266;
    }
    
    .icon-name {
      display: inline-block;
      padding: 0 3px;
      height: 1em;
      color: #606266;
    }
    
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
  .mult-icon {
    list-style: none;

    li {
      display: inline-block;
      max-width: 120px;
      height: 150px;
      text-align: center;
      transition: color .15s linear;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      margin-right: 5px;
      margin-bottom: 5px;
      background: #054885;
      padding: 8px;
      box-sizing: border-box;
      @utils-vertical-center;

      svg {
        font-size: 45px;
        margin-top: 10px;
      }

      span {
        display: inline-block;
        line-height: normal;
        font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
        color: #fff;
        word-break: break-all;
        margin-top: 15px;
        vertical-align: top;
      }
    }
  }
</style>
## Icon 图标

:::tip 
提供了一套常用的图标集合。

此组件库维护了单色和多色两套 icon，其中由于组件里有 element-ui 自带的字体 icon，故为了区分组件自带的和自定义的做了以下区别处理：

- element-ui 自带的字体 icon 命名规则为 ```el-icon-<name>```，自定义的字体 icon 命名规则为 ```el-ksd-icon-<name>```
:::

### 使用方法

直接通过设置类名为 `el-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">搜索</el-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
  <li v-for="item in customIcons" :key="item">
    <span>
      <i :class="'el-ksd-icon-' + item"></i>
      <span class="icon-name">{{`el-ksd-icon-${item}`}}</span>
    </span>
  </li>
</ul>

### 多色图标

:::demo
```html
<template>
  <ul class="mult-icon">
    <template v-if="multIcons">
      <li v-for="item in multIcons" :key="item.icon_id">
        <el-icon :name="`el-ksd-icon-${item.font_class}`" type="mult"></el-icon>
        <span>{{'el-ksd-icon-' + item.font_class}}</span>
      </li>
    </template>
  </ul>
</template>
```
