<script lang="ts">
  import { defineComponent } from 'vue'
  import { props } from '../Input/props'
  import { useToggle } from '../../composable'
  import { useNativeAttr } from '../Input/use'
  export default defineComponent({
    name: 'u-input-password',
    props,
    setup(props) {
      const nativeAttr = useNativeAttr(props)

      const [focused, setFocused] = useToggle(false)

      const handleFocus = () => {
        setFocused()
      }
      const handleBlur = () => {
        setFocused()
      }

      const [hidePassword, setHidePassword] = useToggle(false)

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
