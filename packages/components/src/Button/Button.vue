<script lang="ts">
  import { UsefulIcon } from '../Icon'
  import { defineComponent, computed } from 'vue'
  import { props } from './props'
  export default defineComponent({
    name: 'u-button',
    props,
    components: {
      'u-icon': UsefulIcon
    },
    setup(props) {
      // handle class name
      const className = computed(() => {
        const { type, size, block, loading } = props
        let res = 'useful-button'
        type && (res += ` ${type}`)
        size !== 'middle' && (res += ` ${size}`)
        block && (res += ' block')
        loading && (res += ' loading')
        return res
      })

      // handle disabled state
      const disabled = computed(() => props.disabled)

      // handle loading
      const loading = computed(() => props.loading)

      // handle click
      const handleClick = (event: MouseEvent) => {
        console.log(disabled.value)
        if (disabled.value) return
        props.onClick && props.onClick(event)
      }
      return {
        className,
        disabled,
        loading,
        handleClick
      }
    }
  })
</script>

<template>
  <button :class="className" :disabled="disabled" @click="handleClick">
    <span class="loading-icon">
      <u-icon
        type="nl-loading"
        :class="`loading-icon ${loading ? 'loading-show' : 'loading-hide'}`"
      />
    </span>
    <span>
      <slot />
    </span>
  </button>
</template>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('./style.less');
</style>
