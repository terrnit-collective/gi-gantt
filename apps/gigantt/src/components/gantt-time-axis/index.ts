import type { App, Plugin } from 'vue'

import GanttTimeAxis from './GanttTimeAxis.vue'
import { registerComponent } from 'utils/plugins'

export default {
  install(app: App) {
    registerComponent(app, GanttTimeAxis)
  }
} as Plugin

export { GanttTimeAxis as GiGanttTimeAxis }