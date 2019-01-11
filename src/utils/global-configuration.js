export function getKyligenceConfiguration(opts) {
  let inputConfigs = {
    ElInput: opts['el-input'],
    ElCascader: opts['el-cascader'],
    ElPicker: opts['el-picker'],
    ElInputNumber: opts['el-input-number'],
    ElSelect: opts['el-select']
  };

  if (opts['input']) {
    for (const componentName in inputConfigs) {
      inputConfigs[componentName] = {};
      for (const optKey in opts['input']) {
        inputConfigs[componentName][optKey] = opts['input'][optKey];
      }
    }
  }

  return Object.assign({}, inputConfigs);
}
