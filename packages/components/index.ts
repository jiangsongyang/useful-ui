import type { App } from 'vue'
/** basic */
import { UsefulButton } from './src/Button'
import { UsefulIcon } from './src/Icon'
/** layout */
import { UsefulDivider } from './src/Divider'
/** show  */
import { UsefulCard } from './src/Card'
/** input */
import { UsefulInput } from './src/Input'

const components = [UsefulButton, UsefulIcon, UsefulDivider, UsefulCard, UsefulInput]

const install = (app: App) => {
  components.forEach((component) => {
    component.install && app.use(component)
  })
}

export { install, UsefulButton, UsefulIcon, UsefulDivider, UsefulCard, UsefulInput }

export default {
  install,
  ...components
}
