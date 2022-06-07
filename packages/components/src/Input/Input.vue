<script lang="ts">
  import { defineComponent } from 'vue'
  import { props } from './props'
  export default defineComponent({
    name: 'u-input',
    props,
    setup(props) {
      // handle class name
      console.log(props)
      return {
        props
      }
    }
  })
</script>

<template>
  <input class="useful-input" type="text" v-bind="props" />
</template>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('./style.less');
</style>
