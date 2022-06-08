// import type { PropType } from 'vue'

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
  }
}

export type TAllowNativeAttributes = 'placeholder'
