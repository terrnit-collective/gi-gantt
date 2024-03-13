import type { InjectionKey, Ref } from 'vue'

import type { GanttBarObject } from '../types'

export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD HH:mm'

export type GetChartRows = () => GanttBarObject[][]
export type EmitBarEvent = (
    e: MouseEvent,
    bar: GanttBarObject,
    datetime?: string | Date,
    movedBars?: Map<GanttBarObject, { oldStart: string; oldEnd: string }>
) => void

export const CHART_ROWS_KEY = Symbol('CHART_ROWS_KEY') as InjectionKey<GetChartRows>
export const CONFIG_KEY = Symbol('CONFIG_KEY') as InjectionKey<GanttChartConfig>
export const EMIT_BAR_EVENT_KEY = Symbol('EMIT_BAR_EVENT_KEY') as InjectionKey<EmitBarEvent>
export const BAR_CONTAINER_KEY = Symbol('BAR_CONTAINER_KEY') as InjectionKey<
    Ref<HTMLElement | null>
>

export const TOOLTIP_FORMATS = {
  hour: 'HH:mm',
  day: 'DD. MMM HH:mm',
  month: 'DD. MMMM YYYY'
} as const

export const DEFAULT_DOT_COLOR = 'cadetblue'
