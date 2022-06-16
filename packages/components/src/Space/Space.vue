<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { props } from './props'
  export default defineComponent({
    name: 'u-space',
    props,
    setup(props) {
      const className = computed(() => {
        let res = 'useful-space '
        if (props.direction) {
          res += `useful-space-${props.direction} `
        }
        return res
      })

      return {
        className
      }
    }
  })
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('./style.less');
</style>
