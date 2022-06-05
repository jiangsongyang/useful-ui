import Theme from 'vitepress/dist/client/theme-default'
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp: ({ app }) => {
    import('@useful-ui/components').then((res) => {
      app.use(res)
    })
    registerComponents(app)
  }
}
