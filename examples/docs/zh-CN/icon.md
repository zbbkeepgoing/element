<script>
  var iconList = require('examples/icon.json');
  let multIconList = require('../../../src/iconfont/iconfont.json')

  export default {
    data() {
      return {
        icons: iconList,
        multIcons: [...multIconList.glyphs],
        otherIcons: ["arrow_right_1_12","arrow_right_1_16","arrow_up_1_16","arrow_left_1_16","arrow_down_1_16","arrow_left_1_22","arrow_left_2_22","arrow_up_1_22","arrow_right_1_22","arrow_down_1_22","arrow_right_1_24","arrow_up_1_24","arrow_down 1_24","arrow_left_1_24","add_24","0_placeholder_24","nav_action_24","loading_24","close_22","download_22","add_22","company_22","0_placeholder_22","code_22","auto_wizard_22","controller_22","document_22","discard_22","build_index_22","info_22","int&bigint_22","dup_22","export_2_22","folder_22","hierachy_22","insigh_22","help_22","keychain_22","edit_22","minus_22","pause_22","merge_22","meausre_22","more_22","language_22","notbook_22","move_22","loading_22","nav_action_22","play_22","right_02_22","pause_outline_22","play_outline_22","redo_22","play_fill_22","sample_22","resure_22","repair_22","more_with_circle_22","stop_fill_22","table_down_22","stop_outline_22","table_delete_22","search_22","save_22","table_er_diagram_22","system_config_22","timestamp_22","table_right_22","table_refresh_22","time_22","table_rank_22","table_filter_22","undo_22","view_range_22","view_22","ts_22","0_placeholder_16","company_16","document_16","add_16","folder_16","close_16","loading_16","minus_16","dup_16","hierarchy_16","keychain_16","edit_16","play_16","move_16","more_with_circle_16","time_16","int&bigint_16","meausre_16","table_right_16","info_16","save_16","view_16","notbook_16","table_rank_16","data_base_16","search_16","help_16","table_delete_16","table_down_16","more_16","build_index_16","view_range_16","check_12","half_selected_12","table_dwon_12","folder_12","0_placeholder_12","loading_12","table_right_12","info_12"]
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
  <li v-for="item in otherIcons" :key="item">
    <span>
      <i :class="'el-ksd-icon-' + item"></i>
      <span class="icon-name">{{`el-ksd-icon-${item}`}}</span>
    </span>
  </li>
  <li>
    <span>
      <i class="el-ksd-icon-arrow_right_1_12"></i>
      <span class="icon-name">el-ksd-icon-arrow_right_1_12</span>
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
