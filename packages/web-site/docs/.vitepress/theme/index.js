import Theme from 'vitepress/dist/client/theme-default'
import UsefulUI from '@useful-ui/components'
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(UsefulUI)
    registerComponents(app)
  }
}
