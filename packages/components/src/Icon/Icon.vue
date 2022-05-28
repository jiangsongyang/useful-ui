<script lang="ts">
  import { defineComponent } from 'vue'
  import { props } from './props'
  export default defineComponent({
    name: 'u-icon',
    props,
    setup(props) {}
  })
</script>

<template>
  <i class="useful-icon">
    <slot />
  </i>
</template>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('./style.less');
</style>
