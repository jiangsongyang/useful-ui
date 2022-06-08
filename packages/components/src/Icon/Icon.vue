<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { props } from './props'
  import '../../assets/icon/iconfont.js'
  export default defineComponent({
    name: 'u-icon',
    props,
    setup(props) {
      const type = computed(() => props.type)
      return {
        type
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
