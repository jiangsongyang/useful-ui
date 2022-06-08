/** basic */
import { UsefulButton } from './src/Button'
import { UsefulIcon } from './src/Icon'
/** layout */
import { UsefulDivider } from './src/Divider'
/** show  */
import { UsefulCard } from './src/Card'
/** input */
import { UsefulInput } from './src/Input'
import { UsefulInputPassword } from './src/InputPassword'
/** type */
import type { App } from 'vue'

const components = [
  /** basic */
  UsefulButton,
  UsefulIcon,
  /** layout */
  UsefulDivider,
  /** show  */
  UsefulCard,
  /** input */
  UsefulInput,
  UsefulInputPassword
]

const install = (app: App) => {
  components.forEach((component) => {
    component.install && app.use(component)
  })
}

export {
  install,
  UsefulButton,
  UsefulIcon,
  UsefulDivider,
  UsefulCard,
  UsefulInput,
  UsefulInputPassword
}

export default {
  install,
  ...components
}
