import type { App } from 'vue'
import { UsefulButton } from './src/Button'
import { UsefulIcon } from './src/Icon'
import { UsefulDivider } from './src/Divider'
import { UsefulCard } from './src/Card'

const components = [UsefulButton, UsefulIcon, UsefulDivider, UsefulCard]

const install = (app: App) => {
  components.forEach((component) => {
    component.install && app.use(component)
  })
}

export { install, UsefulButton, UsefulIcon, UsefulDivider, UsefulCard }

export default {
  install,
  ...components
}
