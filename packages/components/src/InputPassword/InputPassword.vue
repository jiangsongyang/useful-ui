<script lang="ts">
  import { ref, defineComponent, computed } from 'vue'
  import type { InputHTMLAttributes } from 'vue'
  import { props } from '../Input/props'
  import type { TAllowNativeAttributes } from '../Input/props'
  export default defineComponent({
    name: 'u-input-password',
    props,
    setup(props) {
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

      const hidePassword = ref<Boolean>(true)

      const setHidePassword = () => {
        hidePassword.value = !hidePassword.value
      }

      return {
        nativeAttr,

        /** */
        hidePassword,
        setHidePassword,

        /** focus state */
        focused,

        /** event */
        handleFocus,
        handleBlur
      }
    }
  })
</script>

<template>
  <div :class="`useful-input-affix-wrapper ${focused && 'useful-input-affix-wrapper-focus'}`">
    <input
      :class="`useful-input ${size !== 'default' ? size : ''}`"
      v-bind="nativeAttr"
      :type="`${hidePassword ? 'password' : 'text'}`"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <div class="useful-input-suffix" @click="setHidePassword">
      <u-icon :type="`${hidePassword ? 'eye' : 'eye-fill'}`" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('../Input/style.less');
</style>
