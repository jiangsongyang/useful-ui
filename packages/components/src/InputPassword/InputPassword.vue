<script lang="ts">
  import { defineComponent } from 'vue'
  import { props } from '../Input/props'
  import { useToggle } from '../../composable'
  import { useNativeAttr, useFocus, useModel } from '../Input/use'
  export default defineComponent({
    name: 'u-input-password',
    props,
    setup(props, { emit }) {
      const nativeAttr = useNativeAttr(props)

      const { modelValue, updateVal } = useModel(props, emit)

      const { focused, handleFocus, handleBlur } = useFocus()

      const [hidePassword, setHidePassword] = useToggle(true)

      return {
        modelValue,
        updateVal,

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
      :value="modelValue"
      :type="`${hidePassword ? 'password' : 'text'}`"
      v-bind="nativeAttr"
      @input="updateVal"
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
