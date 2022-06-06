<script lang="ts">
  import { defineComponent } from 'vue'
  import { props } from './props'
  export default defineComponent({
    name: 'u-card',
    props,
    setup() {
      return {}
    }
  })
</script>

<template>
  <div class="useful-card">
    <div class="useful-card-head">
      <div class="useful-card-head-wrapper">
        <div class="useful-card-head-title"></div>
        <div class="useful-card-head-ant-card-extra"></div>
      </div>
    </div>
    <div class="useful-card-body"></div>
  </div>
</template>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('./style.less');
</style>
