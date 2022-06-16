import { computed } from 'vue'
import type { TProps } from '../../props'

export const useSize = (props: TProps) => {
  const size = computed(() => props.size)
  return {
    size
  }
}
