<template>
  <component
    :is="icons[name]"
    class="svg-icon"
    :style="{ width: size + 'px', height: size + 'px', color: color }" />
</template>

<script>
import * as icons from './icons'

export default {
  name: 'SvgIcon',
  components: {
    icons
  },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '24'
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  computed: {
    icons() {
      return icons
    }
  }
}
</script>

<style>
.svg-icon {
  display: inline-block;
}

.svg-icon path {
  width: 100%;
  height: 100%;
  /* stylelint-disable-next-line value-keyword-case */
  fill: currentColor;
}
</style>
