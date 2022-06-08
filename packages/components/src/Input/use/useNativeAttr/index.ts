import { computed, readonly } from 'vue'
import type { InputHTMLAttributes } from 'vue'
import type { TAllowNativeAttributes, TProps } from '../../props'

export const useNativeAttr = (props: TProps) => {
  const allowNativeAttrs: TAllowNativeAttributes[] = ['placeholder']

  const nativeAttr = computed(() => {
    const attrs: Pick<InputHTMLAttributes, 'placeholder'> = {}
    allowNativeAttrs.forEach((key: TAllowNativeAttributes) => {
      if (props[key]) {
        attrs[key] = props[key]
      }
    })
    return attrs
  })

  return readonly(nativeAttr)
}
