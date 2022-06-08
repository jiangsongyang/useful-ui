import type { PropType, ExtractPropTypes } from 'vue'

export const props = {
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
  }
}

export type TAllowNativeAttributes = 'placeholder'
export type TProps = ExtractPropTypes<typeof props>
