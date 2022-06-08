<script lang="ts">
  import { ref, computed, defineComponent } from 'vue'
  import type { InputHTMLAttributes } from 'vue'
  import { props } from './props'
  import type { TAllowNativeAttributes } from './props'
  export default defineComponent({
    name: 'u-input',
    props,
    setup(props) {
      console.log(props, 'props')

      const size = computed(() => props.size)

      // handle class name
      const prefix = computed(() => props.prefix)
      const suffix = computed(() => props.suffix)

      const allowNativeAttrs: TAllowNativeAttributes[] = ['placeholder']

      const nativeAttr = computed(() => {
        const attrs: Pick<InputHTMLAttributes, 'placeholder'> = {}
        allowNativeAttrs.forEach((key: TAllowNativeAttributes) => {
          if (props[key]) {
            attrs[key] = props[key]
          }
        })
        return attrs
      })

      const focused = ref<Boolean>(false)

      const setFocused = (value: Boolean) => {
        focused.value = value
      }

      const handleFocus = () => {
        setFocused(true)
      }
      const handleBlur = () => {
        setFocused(false)
      }

      return {
        nativeAttr,
        prefix,
        suffix,

        /** focus state */
        focused,

        /** size */
        size,

        /** event */
        handleFocus,
        handleBlur
      }
    }
  })
</script>

<template>
  <!-- with prefix or suffix -->
  <template v-if="prefix || suffix">
    <div :class="`useful-input-affix-wrapper ${focused && 'useful-input-affix-wrapper-focus'}`">
      <div class="useful-input-prefix" v-if="prefix">
        <u-icon :type="prefix" />
      </div>
      <input
        :class="`useful-input ${size !== 'default' ? size : ''}`"
        v-bind="nativeAttr"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <div class="useful-input-suffix" v-if="suffix">
        <u-icon :type="suffix" />
      </div>
    </div>
  </template>
  <!-- basic -->
  <template v-else>
    <input :class="`useful-input ${size !== 'default' ? size : ''}`" v-bind="nativeAttr" />
  </template>
</template>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('./style.less');
</style>
