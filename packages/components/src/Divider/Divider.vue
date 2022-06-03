<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { props } from './props'
  export default defineComponent({
    name: 'u-divider',
    props,
    setup(props, context) {
      const hasSlot = computed(() => context.slots.default !== undefined)

      // handle class name
      const className = computed(() => {
        const { slots } = context
        const { dashed, orientation } = props
        let res = 'useful-divider useful-divider-horizontal'
        // handle dashed
        dashed && (res += ' dashed')
        // handle with text
        slots.default && (res += ` with-text ${orientation}`)

        return res
      })

      // handle style
      const style = computed(() => {
        const { orientation, orientationMargin } = props

        let res = 'margin-'
        // handle orientation
        orientation !== 'center' && (res += `${orientation}:`)
        // handle orientationMargin
        orientation !== 'center' && (res += `${orientationMargin}px`)
        return res
      })

      return {
        className,
        hasSlot,
        style
      }
    }
  })
</script>

<template>
  <div :class="className">
    <span v-if="hasSlot" class="divider-inner-text" :style="style">
      <slot />
    </span>
  </div>
</template>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('./style.less');
</style>
