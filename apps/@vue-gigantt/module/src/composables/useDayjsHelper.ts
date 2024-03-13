import dayjs, { type Dayjs } from 'dayjs'
import { computed } from 'vue'

import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js'
import isBetween from 'dayjs/plugin/isBetween.js'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'

import type { GanttChartConfig, GanttBarObject } from 'types/index'
import { config as _config } from 'provider/index'

export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD HH:mm'

export const useDayjsHelper = (config: GanttChartConfig = _config()) => {
  const { chartStart, chartEnd, barStart, barEnd, dateFormat } = config
  // TODO add dayjs plugins there

  dayjs.extend(isSameOrBefore)
  dayjs.extend(isSameOrAfter)
  dayjs.extend(isBetween)
  dayjs.extend(customParseFormat)

  dayjs.locale('ru-RU')
  const chartStartDayjs = computed(() => toDayjs(chartStart.value))
  const chartEndDayjs = computed(() => toDayjs(chartEnd.value))

  const toDayjs = (input: string | Date | GanttBarObject, startOrEnd?: 'start' | 'end') => {
    let value
    if (startOrEnd !== undefined && typeof input !== 'string' && !(input instanceof Date)) {
      value = startOrEnd === 'start' ? input[barStart.value] : input[barEnd.value]
    }

    if (typeof input === 'string') {
      value = input
    } else if (input instanceof Date) {
      return dayjs(input)
    }
    const format = dateFormat.value || DEFAULT_DATE_FORMAT
    return dayjs(value, format, true)
  }

  const format = (input: string | Date | Dayjs, pattern?: string | false) => {
    if (pattern === false) {
      return input instanceof Date ? input : dayjs(input).toDate()
    }
    const inputDayjs = typeof input === 'string' || input instanceof Date ? toDayjs(input) : input

    return inputDayjs.format(pattern)
  }

  return {
    chartStartDayjs,
    chartEndDayjs,
    toDayjs,
    format
  }
}
