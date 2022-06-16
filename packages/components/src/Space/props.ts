import type { PropType } from 'vue'

export const props = {
  align: {
    type: String as PropType<'start' | 'end' | 'center' | 'baseline'>
  },
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal'
  }
}
