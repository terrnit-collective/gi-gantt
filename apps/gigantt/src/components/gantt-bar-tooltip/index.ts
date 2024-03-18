import type { App, Plugin } from 'vue'

import GanttBarTooltip from './GanttBarTooltip.vue'
import { registerComponent } from 'utils/plugins'

export default {
  install(app: App) {
    registerComponent(app, GanttBarTooltip)
  }
} as Plugin

export { GanttBarTooltip as GiGanttBarTooltip }