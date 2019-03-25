<template>
  <transition name="el-alert-fade">
    <div
      class="el-alert"
      :class="[typeClass, needBg, center ? 'is-center' : '']"
      v-show="visible"
      role="alert"
    >
      <i class="el-alert__icon" :class="[ iconClass ]" v-if="showIcon || icon"></i>
      <div class="el-alert__content">
        <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title">{{ title }}</span>
        <span v-else class="el-alert__title">
          <slot name="title"></slot>
        </span>
        <slot>
          <p class="el-alert__description" v-if="description">{{ description }}</p>
        </slot>
        <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  const TYPE_CLASSES_MAP = {
    'success': 'el-icon-success',
    'warning': 'el-icon-warning',
    'error': 'el-icon-error',
    'tip': 'el-icon-info'
  };
  export default {
    name: 'ElAlert',

    props: {
      title: {
        type: String,
        default: '',
        required: false
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      showIcon: Boolean,
      showBackground: {
        type: Boolean,
        default: true
      },
      center: Boolean
    },

    data() {
      return {
        visible: true
      };
    },

    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    },

    computed: {
      typeClass() {
        return `el-alert--${ this.type }`;
      },
      needBg() {
        return this.showBackground ? '' : 'el-alert--nobg';
      },
      iconClass() {
        return this.icon || TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
      },

      isBigIcon() {
        return this.description || this.$slots.default ? 'is-big' : '';
      },

      isBoldTitle() {
        return this.description || this.$slots.default ? 'is-bold' : '';
      }
    }
  };
</script>
