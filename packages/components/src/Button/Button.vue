<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { props } from './props'
  export default defineComponent({
    name: 'u-button',
    props,
    setup(props) {
      // handle class name
      const className = computed(() => {
        const { type, size, block } = props
        let res = 'useful-button'
        type && (res += ` ${type}`)
        size !== 'middle' && (res += ` ${size}`)
        block && (res += ` block`)
        return res
      })

      // handle disabled state
      const disabled = props.disabled

      // handle loading

      // handle click
      const handleClick = (event: MouseEvent) => {
        if (disabled) return
        props.onClick && props.onClick(event)
      }
      return {
        className,
        disabled,
        handleClick
      }
    }
  })
</script>

<template>
  <button :class="className" :disabled="disabled" @click="handleClick">
    <span>
      <slot />
    </span>
  </button>
</template>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('./style.less');
</style>
