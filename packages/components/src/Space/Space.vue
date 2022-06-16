<script lang="ts">
  import { computed, defineComponent, useSlots, h } from 'vue'
  import type { VNode } from 'vue'
  import { props } from './props'
  export default defineComponent({
    name: 'u-space',
    props,
    setup(props) {
      console.log(props, 'props')

      const children = (useSlots() as any).default()

      const className = computed(() => {
        let res = 'useful-space '
        if (props.direction) {
          res += `useful-space-${props.direction} `
        }
        if (props.align) {
          res += `useful-space-align-${props.align} `
        }
        return res
      })

      const render = () => {
        const warpChildren = children.map((child: VNode) => {
          return h(
            'div',
            {
              class: 'useful-space-item'
            },
            child
          )
        })
        return h(
          'div',
          {
            class: className.value
          },
          warpChildren
        )
      }

      return render
    }
  })
</script>

<style lang="less" scoped>
  @import url('../../global.less');
  @import url('./style.less');
</style>
