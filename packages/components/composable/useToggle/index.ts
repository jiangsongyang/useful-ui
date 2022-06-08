import type { Ref } from 'vue'

export const useToggle = (initialValue: Ref): [Ref, () => void] => {
  const toggle = () => {
    initialValue.value = !initialValue.value
  }

  return [initialValue, toggle]
}
