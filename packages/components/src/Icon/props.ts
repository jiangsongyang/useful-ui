import type { ExtractPropTypes } from 'vue'

export const props = {
  type: String
}

export type ButtonProps = ExtractPropTypes<typeof props>
