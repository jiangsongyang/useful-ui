import type { App } from 'vue'
import Space from './Space.vue'

Space.install = function (app: App) {
  app.component(Space.name, Space)
}

export const UsefulSpace = Space
