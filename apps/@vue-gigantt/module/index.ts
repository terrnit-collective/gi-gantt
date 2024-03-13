import type { Plugin } from 'vue'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js'
import isBetween from 'dayjs/plugin/isBetween.js'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'

import { GanttChart, GanttRow } from './src/components/index'
export function extendDayjs() {
  dayjs.extend(isSameOrBefore)
  dayjs.extend(isSameOrAfter)
  dayjs.extend(isBetween)
  dayjs.extend(customParseFormat)
}

export const plugin: Plugin = {
  install(app) {
    extendDayjs()
    app.component('GiGanttChart', GanttChart)
    app.component('GiGanttRow', GanttRow)
  }
}

export default plugin