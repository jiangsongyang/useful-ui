import type { ExtractPropTypes, PropType } from 'vue'

export const props = {
  type: {
    type: String as PropType<'primary' | 'default' | 'dashed' | 'link' | 'text'>,
    default: 'default'
  },
  size: {
    type: String as PropType<'large' | 'middle' | 'small'>,
    default: 'middle'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>
  }
}

export type ButtonProps = ExtractPropTypes<typeof props>
