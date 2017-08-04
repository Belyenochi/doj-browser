
<template>
  <div class="loader" :class="cx">
    <div class="loader-icon" :style="sl"></div>
    <div class="loader-text" v-if="hasText">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { cx, R } from '../utils/index'
import { boxSizeValidator, borderWidthValidator } from '../utils/css-validator'

export default {
  name: 'Loader',
  props: {
    size: {
      type: String,
      default: '14px',
      validator: boxSizeValidator,
    },
    border: {
      type: String,
      default: '0.2em',
      validator: borderWidthValidator,
    },
    indeterminate: {
      type: Boolean,
      default: false,
      validator: R.is(Boolean),
    }
  },
  computed: {
    hasText: function () {
      return !R.isEmpty(this.$slots)
    },
    cx: function () {
      return cx({
        indeterminate: this.indeterminate,
      })
    },
    sl: function () {
      return {
        width: this.size,
        height: this.size,
        'border-width': this.border,
      }
    },
  },
}
</script>

<style lang="less">
@import '../styles/index';

@loader-speed: 0.6s;
@loader-indeterminate-speed: 1.2s;
@loader-line-color: @light-blue-a200;
@loader-fill-color: @grey-500;
@loader-text-distance: 0.5em;

@import '../styles/general/loader';
</style>
