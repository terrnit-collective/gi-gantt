import type { App, Plugin } from 'vue'

import GanttChart from './GanttChart.vue'
import { registerComponent } from 'utils/plugins'

export default {
  install(app: App) {
    registerComponent(app, GanttChart)
  }
} as Plugin

export { GanttChart as GiGanttChart }