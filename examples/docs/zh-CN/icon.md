<script>
  var iconList = require('examples/icon.json');
  let multIconList = require('../../../src/iconfont/iconfont.json')

  const customIcons = (function () {
    const icons = ["kyligence_16","deltalake_16","adls_gen2_old","AAD_old","azure_synapse_analytics_old","admin2_old","azure_blob_storage_old","dot_old","entry_old","eye_close_old","eye_old","in_process_old","amazon_s3_old","Datawarehouse_old","install_old","metrics_old","LDAP_old","flag_old","nodata_old","read_1_old","rocket_old","Moneyexchange_old","query_monitor_old","service_account_old","system_log_old","total_old","snowflake_old","update1_old","uninstall_old","user_manage_old","timestamp_22","delete_22","repair_22","resure_16","delete_16","version_history_16","version_history_22","nav_fold_22","nav_unfold_22","banch_22","branch_16","cluster_16","cluster_22","folder_22","more_03_old","move_down_old","more_04_old","move_to_top_old","move_up_old","negative_old","ostin_diagnose_old","overview_old","mysql_old","pattern_old","progress_old","paramters_old","project_add_old","project_list_old","project_old","pause_old","project_status_old","query_add_old","record_old","query_import_old","remove_source_old","repair_old","sample_old","sad_old","sampling_old","rules_old","select_old","security_old","shrink_old","setting_old","search_engine_old","smart_mode_small_old","sql_old","smart_mode_old","sqlserver_old","switch_old","symbol_a_old","status_old","studio_old","symbol_pk_old","sync_old","symbol_s_old","symbol_fk_old","table_add_old","table_admin_old","system_old","table_discard_old","table_assign_old","table_group_old","table_resume_old","table_reset_password_old","table_save_old","table_viewer_old","to_accelerated_old","table_setting_old","total_query_statistics_old","type_bigint_old","type_boolean_old","type_decimal_old","type_date_old","type_double_old","type_list_old","type_map_old","type_varbinary_old","type_varchar_old","unlock_old","unload_old","user_old","zoom_in_old","zoom_out_old","zoom_to_default_old","white_list_old","acclerate_portion_old","acclerated_old","acclerating_old","add_new_user_old","admin_collapse_old","add_data_source_old","add_table_old","admin_extend_old","arrow_down_old","arrow_up_old","arrow_up_clean_old","alert_1_old","Artboard_old","auto_computed_column_old","auto_model_ssistant_old","auto_status_warning_old","auto_modeling2_old","auto_type_mandantory_old","auto_type_hierarchy_old","auto_old","auto_type_join_old","az_old","back_old","batch_old","backup_old","batch_delete_old","bottom_bar_old","batch_uncheck_old","blank_section_old","black_list_old","calendar_old","broken_disconnect_old","check-box_old","check_old","clear_old","collapse_1_old","Combined_Shape_old","collapse_2_old","computed_column_old","computed_old","copy_old","contants_old","csv_old","cube_old","data_range_old","data_range_search_old","default_zoom_old","desc_old","details_old","diagnose_old","dock_to_right_old","dm_old","dimension_old","diff_metadata_old","dock_to_right_return_old","document_old","download_old","drop_old","edit_bg_old","empty-box_old","enlarge_old","edit_role_old","error_02_old","error_01_old","exclude_old","expert_mode_small_old","expert_mode_old","fact_table_old","fix_tool_old","fkpk_big_old","filter_old","folder_old","full_screen_1_old","go_old","full_screen_2_old","good_health_old","grid_01_old","greenplum_old","grid_02_old","help_old","homepage_old","iconback_1414_old","import_sql_old","index_auto_old","index_handy_old","iconcopy-1_old","info_old","insight_old","job_old","hive_old","joint_condition_old","lightning_old","keyboard_old","load_old","lock_old","kafka_old","login_email_old","lookup_table_old","lookup-table_old","login_manual_old","login_intro_old","measure_old","mode_chart_old","minus_bg_old","message_old","model_repetition_old","model_old","monitor_old","more_info_16","more_info_22","workspace_22","edit_22","project_22","project_16","edit_r16","workspace_16","arrow_right_24","arrow_up_24","arrow_down_24","loading_24","arrow_left_24","add_22","arrow_down_22","add_with_border_22","arrow_left_22","arrow_table_down_22","arrow_left_L_22","arrow_table_right_22","arrow_up_22","close_22","bell_22","confirm_22","build_index_22","controller_22","document_22","export_22","code_22","arrow_right_22","company_22","download_22","language_22","filter_22","datatype_int_bigint_22","merge_22","license_22","minus_with_border_22","minus_22","more_22","more_with_border_22","keychain_22","pause_22","datatype_meausre_22","loading_22","play_outline_22","play_fill_22","insigh_22","play_with_border_22","resure_22","pause_outline_22","refresh_22","help_22","hierachy_22","stop_fill_22","search_22","notbook_22","sample_22","move_22","save_22","dup_22","redo_22","time_22","stop_with_border_22","table_rank_22","view_range_22","undo_22","view_22","system_config_22","wizard_22","0_placeholder_22","0_placeholder_16","arrow_table_right_16","arrow_down_16","close_16","arrow_up_16","build_index_16","company_16","datatype_meausre_16","datatype_int_bigint_16","dup_16","edit_16","data_base_16","folder_16","document_16","help_with_border_16","loading_16","minus_16","more_with_border_16","keychain_16","more_16","notbook_16","move_16","hierarchy_16","play_outline_16","save_16","search_16","view_16","table_rank_16","view_range_16","time_16","arrow_table_down_16","arrow_right_16","add_16","arrow_left_16"]
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
    },
    methods: {
      handleCopy (val) {
        const tempInput = document.createElement('input')
        tempInput.value = val
        tempInput.style.opacity = 0
        document.body.appendChild(tempInput)
        tempInput.select()
        if (document.execCommand('copy')) {
          document.execCommand('copy')
          this.$message.success('复制成功')
        }
        document.body.removeChild(tempInput)
      }
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
    position: relative;

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
      .copy-layout {
        display: block
      }
    }
  }
  .copy-layout {
    display: none;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    cursor: pointer;
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
<!-- <i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i> -->
<el-button type="primary" icon="el-ksd-icon-search_22">搜索</el-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
      <div class="copy-layout" @click="handleCopy(`el-icon-${name}`)">复制</div>
    </span>
  </li>
  <li v-for="item in customIcons" :key="item">
    <span>
      <i :class="'el-ksd-icon-' + item"></i>
      <span class="icon-name">{{`el-ksd-icon-${item}`}}</span>
      <div class="copy-layout" @click="handleCopy(`el-ksd-icon-${item}`)">复制</div>
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
