import { inject } from 'vue'
import { CHART_ROWS_KEY } from './constants'

export default function getChartRows() {
  const getChartRows = inject(CHART_ROWS_KEY)
  if (!getChartRows) {
    throw Error('Failed to inject getChartRows!')
  }
  return getChartRows
}
