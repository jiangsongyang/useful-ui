<script lang="ts">
  import { defineComponent } from 'vue'
  import { props } from './props'
  import '../../assets/icon/iconfont.js'
  export default defineComponent({
    name: 'u-icon',
    props,
    setup(props) {
      return {
        type: props.type
      }
    }
  })
</script>

<template>
  <svg class="icon svg-icon" aria-hidden="true">
    <use :xlink:href="`#${type}`"></use>
  </svg>
</template>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('./style.less');
</style>
