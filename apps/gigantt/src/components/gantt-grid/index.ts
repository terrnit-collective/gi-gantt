import type { App, Plugin } from 'vue'

import GanttGrid from './GanttGrid.vue'
import { registerComponent } from 'utils/plugins'

export default {
  install(app: App) {
    registerComponent(app, GanttGrid)
  }
} as Plugin

export { GanttGrid as GiGanttGrid }