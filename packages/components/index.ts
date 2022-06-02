import type { App } from 'vue'
import { UsefulButton } from './src/Button'
import { UsefulIcon } from './src/Icon'

const components = [UsefulButton, UsefulIcon]

const install = (app: App) => {
  components.forEach((component) => {
    component.install && app.use(component)
  })
}

export { install, UsefulButton, UsefulIcon }

export default {
  install,
  ...components
}
