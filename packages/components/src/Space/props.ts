import type { PropType } from 'vue'

export const props = {
  align: {
    type: String as PropType<'start' | 'end' | 'center' | 'baseline'>,
    default: 'center'
  },
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal'
  }
}
