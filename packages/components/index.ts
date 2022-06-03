import type { App } from 'vue'
import { UsefulButton } from './src/Button'
import { UsefulIcon } from './src/Icon'
import { UsefulDivider } from './src/Divider'

const components = [UsefulButton, UsefulIcon, UsefulDivider]

const install = (app: App) => {
  components.forEach((component) => {
    component.install && app.use(component)
  })
}

export { install, UsefulButton, UsefulIcon, UsefulDivider }

export default {
  install,
  ...components
}
