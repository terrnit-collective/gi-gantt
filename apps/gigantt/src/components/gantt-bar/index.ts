import type { App, Plugin } from 'vue'

import GanttBar from './GanttBar.vue'
import { registerComponent } from 'utils/plugins'

export default {
  install(app: App) {
    registerComponent(app, GanttBar)
  }
} as Plugin

export { GanttBar as GiGanttBar }