## 更新日志
### 3.0.0
*2018-11-30*
- 组件库整体UI调整 (by 夏倩)

### 2.0.10
*2018-07-30*
- Dialog对话框加入opened和closed事件（by 罗杰）

### 2.0.9
*2018-11-15*
- 给dialog添加isDragable属性，当属性为true时，可以通过拖拽dialog的title移动dialog，但不会超出可视窗口 (by 夏倩)
- Dialog对话框加入opened和closed事件（by 罗杰）

### 2.0.8
*2018-11-2*
- 修改size为small的button font-size为14px
- 修改dialog title默认500的加粗
- 修改date-range的btn group 的type
- 修改slider的show-value样式

### 2.0.7
*2018-10-22*
- 修改dialog border color
- 修改slider show-dynamic-values 样式

### 2.0.5
*2018-10-19*
- 添加slider两个新属性对应UI两个新的slider样式 (by 夏倩)

### 2.0.4
*2018-09-19*
- 修复进度条错误状态图标问题 （by 春燕）

### 2.0.3
*2018-09-5*
- 添加圆形按钮效果 （by 夏倩）

### 2.0.2
*2018-08-20*
- el-alert添加title slot：(by 大圣)
- 修复全局的box-sizing导致message box的header设置的min-height 失效：(by 春燕)

### 2.0.0
*2018-08-17*
- datetimepicker添加两个属性：
  isOnlyIcon(Boolean)，当isOnlyIcon为true时，datetimepicker组件render成icon形式，点击icon触发datetimepicker面板显示
  toggleIcon(String)，可以传入icon的className来替换默认的icon (by 夏倩)

- 添加新的变量@color-text-disabled (by 夏倩)

### 1.1.9
*2018-07-30*
- 穿梭框加入异步数据查询功能（by 罗杰）

### 1.1.8
*2018-06-28*
- message 添加 closeOtherMessages 参数，控制打开message时，是否关闭其他的message（by 黄春燕）
- 在form的vue文件里直接watch lang，验证表单错误信息，以解决所有由于中英文切换带来的验证信息lang不匹配问题 (by 夏倩)

### 1.1.7
*2018-6-19*
- form top position light-height unify for any size (by 夏倩)

### 1.1.6
*2018-6-4*
- select 文本框点击全选or focus状态控制，添加参数inputClickSelected，默认值为true (by 大圣）
- 修改tabel展开行的背景颜色 (by 夏倩）
- 修改button和input disabled状态时字体颜色 (by 夏倩）
- 修改input-number decrease icon的位置垂直居中 (by 夏倩）

### 1.1.5
*2018-5-11*

- 更新文字提示的最大高度，超过部分隐藏 (by 陈志雄）


### 1.1.4
*2018-5-03*
- 添加dialog遮罩层的打开和关闭的全局函数 "__KY_DIALOG_OPEN_EVENT__" AND "__KY_DIALOG_CLOSE_EVENT__"(by 大圣）
- 更新表单验证中英文处理的文档演示 (by 夏倩）
- 去掉dialog body的line-height (by 夏倩）
- 更新form label-position 是top时，lable的padding-bottom为6px (by 夏倩）

### 1.1.3
*2018-4-27*

- 修改select组件内置的resetInputHeight里对应每个size的高度，从default到mini的高度应该是36、32、28、26（by 夏倩）

### 1.1.2

*2018-04-25*

- 表单验证错误信息支持中英文切换（by 夏倩）
- dialog弹窗样式修复（by 夏倩）

### 1.1.1

*2018-04-23*

- 修复dropdown，下拉框位置异常的bug（by 夏倩）
- 替换所有组件中element-ui的引用为kyligence-ui（by 黄春燕）

### 1.1.0

*2018-04-18*

- 替换组件中package文件夹中element-ui的引用为kyligence-ui（by 黄春燕）
