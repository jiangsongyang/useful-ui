import { ref } from 'vue'
import type { Ref } from 'vue'

export const useToggle = (initialValue: boolean): [Ref, () => void] => {
  const _v = ref(initialValue)

  const toggle = () => {
    _v.value = !_v.value
  }

  return [_v, toggle]
}
