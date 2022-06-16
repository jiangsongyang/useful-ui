import { computed } from 'vue'
import type { TProps } from '../../props'

export const useModel = (
  props: TProps,
  emit: (event: 'update:modelValue', ...args: any[]) => void
) => {
  const modelValue = computed(() => props.modelValue)

  const updateVal = (e: Event) => {
    const targetVal = (e.target as HTMLInputElement).value
    emit('update:modelValue', targetVal)
  }

  return {
    modelValue,
    updateVal
  }
}
