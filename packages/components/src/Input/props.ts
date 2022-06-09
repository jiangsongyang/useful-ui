import type { PropType, ExtractPropTypes } from 'vue'

export const props = {
  value: {
    type: String,
    default: ''
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
  onUpdate: {
    type: Function as PropType<(value: string) => void>,
    default: () => {}
  }
}

export type TAllowNativeAttributes = 'placeholder'
export type TProps = ExtractPropTypes<typeof props>
