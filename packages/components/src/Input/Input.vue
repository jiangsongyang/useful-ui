<script lang="ts">
  import { defineComponent } from 'vue'
  import { props } from './props'

  import { useFix, useNativeAttr, useSize, useModel, useFocus } from './use'
  export default defineComponent({
    name: 'u-input',
    props,
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const { modelValue, updateVal } = useModel(props, emit)

      const { size } = useSize(props)

      // handle prefix and suffix
      const { prefix, suffix } = useFix(props)

      const nativeAttr = useNativeAttr(props)

      const { focused, handleFocus, handleBlur } = useFocus(props)

      return {
        modelValue,
        updateVal,

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
        :value="modelValue"
        v-bind="nativeAttr"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="updateVal"
      />
      <div class="useful-input-suffix" v-if="suffix">
        <u-icon :type="suffix" />
      </div>
    </div>
  </template>
  <!-- basic -->
  <template v-else>
    <input
      :class="`useful-input ${size !== 'default' ? size : ''}`"
      :value="modelValue"
      v-bind="nativeAttr"
      @input="updateVal"
    />
  </template>
</template>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('./style.less');
</style>
