import type { ExtractPropTypes, PropType } from 'vue'
import allIcon from '../../assets/icon/iconfont.json'

const allType = allIcon.glyphs.map((i) => i.font_class)

export const props = {
  type: String as PropType<typeof allType[number]>
}

export type ButtonProps = ExtractPropTypes<typeof props>
