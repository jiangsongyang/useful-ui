import { computed } from 'vue'
import type { TProps } from '../../props'

export const useFix = (props: TProps) => {
  const prefix = computed(() => props.prefix)
  const suffix = computed(() => props.suffix)
  return {
    prefix,
    suffix
  }
}
