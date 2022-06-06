import type { PropType } from 'vue'

export const props = {
  dashed: {
    type: Boolean,
    default: false
  },
  orientation: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: 'center'
  },
  orientationMargin: {
    type: Number,
    default: 0
  }
}
