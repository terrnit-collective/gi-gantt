import type { App, Plugin } from 'vue'

import GanttRow from './GanttRow.vue'
import { registerComponent } from 'utils/plugins'

export default {
  install(app: App) {
    registerComponent(app, GanttRow)
  }
} as Plugin

export { GanttRow as GiGanttRow }