<script setup lang="ts">
  import { ButtonProps } from './props'
  defineProps<ButtonProps>()
</script>

<template>
  <button :class="`useful-button ${type}`"><slot /></button>
</template>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('./style.less');
</style>
