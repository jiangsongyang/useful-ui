import type { App } from 'vue'
import { UsefulButton } from './src/Button'

const install = (app: App) => {
  UsefulButton.install && app.use(UsefulButton)
}

export { install, UsefulButton }

export default {
  install,
  UsefulButton
}
