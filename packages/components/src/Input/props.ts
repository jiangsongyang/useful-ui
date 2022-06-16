import type { PropType, ExtractPropTypes } from 'vue'

export const props = {
  modelValue: {
    type: String
  },
  placeholder: {
    type: String,
    default: ''
  },
  prefix: {
    type: String,
    default: null
  },
  suffix: {
    type: String,
    default: null
  },
  size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: 'default'
  },
  onFocus: {
    type: Function as PropType<(e: FocusEvent) => void>
  },
  onBlur: {
    type: Function as PropType<(e: FocusEvent) => void>
  },
  onClick: {
    type: Function as PropType<(e: Event) => void>
  },
  onClear: {
    type: Function as PropType<(value: string) => void>
  },
  onInput: {
    type: Function as PropType<(value: string, e: Event) => void>
  },
  onChange: {
    type: Function as PropType<(value: string, e: Event) => void>
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: string) => void>
  }
}

export type TAllowNativeAttributes = 'placeholder'
export type TProps = ExtractPropTypes<typeof props>
