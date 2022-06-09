<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { props } from './props'

  import { useToggle } from '../../composable'
  import { useFix, useNativeAttr } from './use'
  export default defineComponent({
    name: 'u-input',
    props,
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const modelValue = computed(() => props.modelValue)

      const updateVal = (e: Event) => {
        const targetVal = (e.target as HTMLInputElement).value
        emit('update:modelValue', targetVal)
      }

      const size = computed(() => props.size)

      // handle prefix and suffix
      const { prefix, suffix } = useFix(props)

      const nativeAttr = useNativeAttr(props)

      const [focused, setFocused] = useToggle(false)

      const handleFocus = () => {
        setFocused()
      }
      const handleBlur = () => {
        setFocused()
      }

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
