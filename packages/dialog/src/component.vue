<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave">
    <div class="el-dialog__wrapper" v-show="visible" @click.self="handleWrapperClick">
      <div
        class="el-dialog"
        :class="[{ 'is-fullscreen': fullscreen, 'el-dialog--center': center }, customClass]"
        ref="dialog"
        :style="style">
        <div class="el-dialog__header" :class="{'dragable': isDragable}">
          <slot name="title">
            <span class="el-dialog__title">{{ title }}</span>
          </slot>
          <button
            type="button"
            class="el-dialog__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @click.stop="handleClose">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="el-dialog__body" v-if="rendered"><slot></slot></div>
        <div class="el-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Popup from 'kyligence-ui/src/utils/popup';
  import Migrating from 'kyligence-ui/src/mixins/migrating';
  import emitter from 'kyligence-ui/src/mixins/emitter';

  export default {
    name: 'ElDialog',

    mixins: [Popup, emitter, Migrating],

    props: {
      title: {
        type: String,
        default: ''
      },

      modal: {
        type: Boolean,
        default: true
      },

      modalAppendToBody: {
        type: Boolean,
        default: true
      },

      appendToBody: {
        type: Boolean,
        default: false
      },

      isDragable: {
        type: Boolean,
        default: false
      },

      lockScroll: {
        type: Boolean,
        default: true
      },

      closeOnClickModal: {
        type: Boolean,
        default: true
      },

      closeOnPressEscape: {
        type: Boolean,
        default: true
      },

      showClose: {
        type: Boolean,
        default: true
      },

      width: String,

      fullscreen: Boolean,

      customClass: {
        type: String,
        default: ''
      },

      top: {
        type: String,
        default: '15vh'
      },
      beforeClose: Function,
      center: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        closed: false,
        mousePoint: { x: 0, y: 0 },
        offset: { left: 0, top: 0 }
      };
    },

    watch: {
      visible(val) {
        if (val) {
          this.closed = false;
          this.$emit('open');
          this.$el.addEventListener('scroll', this.updatePopper);
          if (this.isDragable) {
            this.dragable();
          }
          this.$nextTick(() => {
            this.$refs.dialog.scrollTop = 0;
            this.$el.focus();
            // console.log(this.$el);
          });
          if (this.appendToBody) {
            document.body.appendChild(this.$el);
          }
        } else {
          this.$el.removeEventListener('scroll', this.updatePopper);
          if (!this.closed) this.$emit('close');
        }
      }
    },

    computed: {
      style() {
        let style = {};
        if (this.width) {
          style.width = this.width;
        }
        if (!this.fullscreen) {
          style.marginTop = this.top;
        }
        return style;
      }
    },

    methods: {
      getMigratingConfig() {
        return {
          props: {
            'size': 'size is removed.'
          }
        };
      },
      handleWrapperClick() {
        if (!this.closeOnClickModal) return;
        this.handleClose();
      },
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.hide);
        } else {
          this.hide();
        }
      },
      hide(cancel) {
        if (cancel !== false) {
          this.$emit('update:visible', false);
          this.$emit('close');
          this.closed = true;
        }
      },
      updatePopper() {
        this.broadcast('ElSelectDropdown', 'updatePopper');
        this.broadcast('ElDropdownMenu', 'updatePopper');
      },
      dragable() {
        const targetid = this.$el.querySelector('.el-dialog__header');
        const moveTarget = this.$el.querySelector('.el-dialog');
        let leftLimit;
        let topLimit;
        let topMaxLimit;
        targetid.onmousedown = (event) => {
          const e = event;
          const offsetLeft = this.offset.left;
          const offsetTop = this.offset.top;
          leftLimit = (window.innerWidth - moveTarget.offsetWidth) / 2;
          topLimit = window.innerHeight * moveTarget.style['margin-top'].split('vh')[0] / 100;
          topMaxLimit = window.innerHeight * (100 - moveTarget.style['margin-top'].split('vh')[0]) / 100 - moveTarget.offsetHeight;
          this.mousePoint.x = e.clientX - offsetLeft;
          this.mousePoint.y = e.clientY - offsetTop;
          document.onmousemove = move;
          e.stopPropagation();
        };
        const move = (event) => {
          const e = event;
          let l = e.clientX - this.mousePoint.x;
          let t = e.clientY - this.mousePoint.y;
          if (l < 0 - leftLimit) {
            l = 0 - leftLimit;
          } else if (l > leftLimit) {
            l = leftLimit;
          }
          if (t < 0 - topLimit) {
            t = 0 - topLimit;
          } else if (t > topMaxLimit) {
            t = topMaxLimit;
          }
          this.offset.left = l;
          this.offset.top = t;
          moveTarget.style.left = this.offset.left + 'px';
          moveTarget.style.top = this.offset.top + 'px';
          document.onmouseup = end;
          targetid.onmouseup = end;
          e.stopPropagation();
        };
        const end = (event) => {
          const e = event;
          document.onmousemove = null;
          document.onmouseup = null;
          e.stopPropagation();
        };
      },
      afterEnter() {
        this.$emit('opened');
      },
      afterLeave() {
        this.$emit('closed');
      }
    },

    mounted() {
      if (this.visible) {
        this.rendered = true;
        this.open();
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      }
    },

    destroyed() {
      // if appendToBody is true, remove DOM node after destroy
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  };
</script>
