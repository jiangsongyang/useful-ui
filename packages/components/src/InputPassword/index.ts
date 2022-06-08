import type { App } from 'vue'
import InputPassword from './InputPassword.vue'

InputPassword.install = function (app: App) {
  app.component(InputPassword.name, InputPassword)
}

export const UsefulInputPassword = InputPassword
