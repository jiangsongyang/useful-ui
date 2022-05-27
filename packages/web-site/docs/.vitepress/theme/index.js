import Theme from 'vitepress/dist/client/theme-default'
import Button from '@useful-ui/components/src/Button/Button.vue'
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Button', Button)
    registerComponents(app)
  }
}
