import type { CSSProperties, ToRefs, Ref } from 'vue'

export type GanttBarObject = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
    config: {
        id: string
        label?: string
        hasHandles?: boolean
        immobile?: boolean
        bundle?: string
        pushOnOverlap?: boolean
        dragLimitLeft?: number
        dragLimitRight?: number
        style?: CSSProperties
        class?: string
    }
}
export type GanttChartProps = {
	chartStart: string | Date
	chartEnd: string | Date
	precision?: 'hour' | 'day' | 'month'
	barStart: string
	barEnd: string
	dateFormat?: string | false
	width?: string
	hideTimeaxis?: boolean
	colorScheme?: ColorSchemeKey | ColorScheme
	grid?: boolean
	pushOnOverlap?: boolean
	noOverlap?: boolean
	rowHeight?: number
	highlightedUnits?: number[]
	font?: string
  }

export type GanttChartConfig = ToRefs<Required<GanttChartProps>> & {
  colors: ComputedRef<ColorScheme>
  chartSize: {
    width: Ref<number>
    height: Ref<number>
  }
}

export type GanttChartEmits = {
	(
		e: 'click-bar',
		value: {
		bar: GanttBarObject;
		e: MouseEvent;
		datetime?: string | Date
		}
	): void
	(
		e: 'mousedown-bar',
		value: {
		bar: GanttBarObject;
		e: MouseEvent;
		datetime?: string | Date
		}
	): void
	(
		e: 'mouseup-bar',
		value: {
		bar: GanttBarObject;
		e: MouseEvent;
		datetime?: string | Date
		}
	): void
	(
		e: 'dblclick-bar',
		value: {
		bar: GanttBarObject;
		e: MouseEvent;
		datetime?: string | Date
		}
	): void
	(
		e: 'mouseenter-bar',
		value: {
		bar: GanttBarObject;
		e: MouseEvent
		}
	): void
	(
		e: 'mouseleave-bar',
		value: {
		bar: GanttBarObject;
		e: MouseEvent
		}
	): void
	(
		e: 'dragstart-bar',
		value: {
		bar: GanttBarObject;
		e: MouseEvent
		}
	): void
	(
		e: 'drag-bar',
		value: {
		bar: GanttBarObject;
		e: MouseEvent
		}
	): void
	(
		e: 'dragend-bar',
		value: {
		bar: GanttBarObject
		e: MouseEvent
		movedBars?: Map<GanttBarObject, { oldStart: string; oldEnd: string }>
		}
	): void
	(
		e: 'contextmenu-bar',
		value: {
		bar: GanttBarObject;
		e: MouseEvent;
		datetime?: string | Date
		}
	): void
  }

// export type GanttChartConfig = ToRefs<Required<GanttChartProps>> & {
// 	colors: ComputedRef<ColorScheme>
// 	chartSize: {
// 	width: Ref<number>
// 	height: Ref<number>
// 	}
// }

// export interface GanttChartProps {
// 	chartStart: string | Date
// 	chartEnd: string | Date
// 	precision?: 'hour' | 'day' | 'month'
// 	barStart: string
// 	barEnd: string
// 	dateFormat?: string | false
// 	width?: string
// 	hideTimeaxis?: boolean
// 	colorScheme?: ColorSchemeKey | ColorScheme
// 	grid?: boolean
// 	pushOnOverlap?: boolean
// 	noOverlap?: boolean
// 	rowHeight?: number
// 	highlightedUnits?: number[]
// 	font?: string
// }

// export interface GanttChartEmits {
// (
// 	e: 'click-bar',
// 	value: {
// 	bar: GanttBarObject;
// 	e: MouseEvent;
// 	datetime?: string | Date
// 	}
// ): void
// (
// 	e: 'mousedown-bar',
// 	value: {
// 	bar: GanttBarObject;
// 	e: MouseEvent;
// 	datetime?: string | Date
// 	}
// ): void
// (
// 	e: 'mouseup-bar',
// 	value: {
// 	bar: GanttBarObject;
// 	e: MouseEvent;
// 	datetime?: string | Date
// 	}
// ): void
// (
// 	e: 'dblclick-bar',
// 	value: {
// 	bar: GanttBarObject;
// 	e: MouseEvent;
// 	datetime?: string | Date
// 	}
// ): void
// (
// 	e: 'mouseenter-bar',
// 	value: {
// 	bar: GanttBarObject;
// 	e: MouseEvent
// 	}
// ): void
// (
// 	e: 'mouseleave-bar',
// 	value: {
// 	bar: GanttBarObject;
// 	e: MouseEvent
// 	}
// ): void
// (
// 	e: 'dragstart-bar',
// 	value: {
// 	bar: GanttBarObject;
// 	e: MouseEvent
// 	}
// ): void
// (
// 	e: 'drag-bar',
// 	value: {
// 	bar: GanttBarObject;
// 	e: MouseEvent
// 	}
// ): void
// (
// 	e: 'dragend-bar',
// 	value: {
// 	bar: GanttBarObject
// 	e: MouseEvent
// 	movedBars?: Map<GanttBarObject, { oldStart: string; oldEnd: string }>
// 	}
// ): void
// (
// 	e: 'contextmenu-bar',
// 	value: {
// 	bar: GanttBarObject;
// 	e: MouseEvent;
// 	datetime?: string | Date
// 	}
// ): void
// }