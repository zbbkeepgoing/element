<template>
  <i :class="'el-icon-' + name" v-if="type === 'single' || !type"></i>
  <svg class="mutiple-color-icon" aria-hidden="true" v-else>
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'ElIcon',

    props: {
      name: String,
      type: {
        type: String,
        default: 'single'
      }
    }
  };
</script>
