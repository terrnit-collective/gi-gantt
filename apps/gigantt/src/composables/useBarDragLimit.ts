import { config, getChartRows } from 'provider/index'

import type { GanttBarObject } from 'types/gantt'

export const useBarDragLimit = () => {
  const { pushOnOverlap } = config()
  const _getChartRows = getChartRows()

  const getBarsFromBundle = (bundle?: string) => {
    const res: GanttBarObject[] = []
    if (bundle != null) {
      _getChartRows().forEach((row) => {
        row.forEach((bar) => {
          if (bar.config.bundle === bundle) {
            res.push(bar)
          }
        })
      })
    }
    return res
  }

  const setDragLimitsOfGanttBar = (bar: GanttBarObject) => {
    if (!pushOnOverlap.value || bar.config.pushOnOverlap === false) {
      return
    }
    for (const sideValue of ['left', 'right']) {
      const side = sideValue as 'left' | 'right'
      const { gapDistanceSoFar, bundleBarsAndGapDist } = countGapDistanceToNextImmobileBar(
        bar,
        0,
        side
      )
      let totalGapDistance = gapDistanceSoFar
      const bundleBarsOnPath = bundleBarsAndGapDist
      if (!bundleBarsOnPath) {
        continue
      }

      for (let i = 0; i < bundleBarsOnPath.length; i++) {
        const barFromBundle = bundleBarsOnPath[i].bar
        const gapDist = bundleBarsOnPath[i].gapDistance
        const otherBarsFromBundle = getBarsFromBundle(barFromBundle.config.bundle).filter(
          (otherBar) => otherBar !== barFromBundle
        )
        otherBarsFromBundle.forEach((otherBar) => {
          const nextGapDistanceAndBars = countGapDistanceToNextImmobileBar(otherBar, gapDist, side)
          const newGapDistance = nextGapDistanceAndBars.gapDistanceSoFar
          const newBundleBars = nextGapDistanceAndBars.bundleBarsAndGapDist
          if (newGapDistance != null && (!totalGapDistance || newGapDistance < totalGapDistance)) {
            totalGapDistance = newGapDistance
          }
          newBundleBars.forEach((newBundleBar) => {
            if (!bundleBarsOnPath.find((barAndGap) => barAndGap.bar === newBundleBar.bar)) {
              bundleBarsOnPath.push(newBundleBar)
            }
          })
        })
      }
      const barElem = document.getElementById(bar.config.id) as HTMLElement
      if (totalGapDistance != null && side === 'left') {
        bar.config.dragLimitLeft = barElem.offsetLeft - totalGapDistance
      } else if (totalGapDistance != null && side === 'right') {
        bar.config.dragLimitRight =
                    barElem.offsetLeft + barElem.offsetWidth + totalGapDistance
      }
    }
    // all bars from the bundle of the clicked bar need to have the same drag limit:
    const barsFromBundleOfClickedBar = getBarsFromBundle(bar.config.bundle)
    barsFromBundleOfClickedBar.forEach((barFromBundle) => {
      barFromBundle.config.dragLimitLeft = bar.config.dragLimitLeft
      barFromBundle.config.dragLimitRight = bar.config.dragLimitRight
    })
  }

  // returns the gap distance to the next immobile bar
  // in the row where the given bar (parameter) is (added to gapDistanceSoFar)
  // and a list of all bars on that path that belong to a bundle
  const countGapDistanceToNextImmobileBar = (
    bar: GanttBarObject,
    gapDistanceSoFar = 0,
    side: 'left' | 'right'
  ) => {
    const bundleBarsAndGapDist = bar.config.bundle
      ? [{ bar, gapDistance: gapDistanceSoFar }]
      : []
    let currentBar = bar
    let nextBar = getNextGanttBar(currentBar, side)
    // left side:
    if (side === 'left') {
      while (nextBar) {
        const currentBarElem = document.getElementById(currentBar.config.id) as HTMLElement
        const nextBarElem = document.getElementById(nextBar.config.id) as HTMLElement
        const nextBarOffsetRight = nextBarElem.offsetLeft + nextBarElem.offsetWidth
        gapDistanceSoFar += currentBarElem.offsetLeft - nextBarOffsetRight
        if (nextBar.config.immobile) {
          return { gapDistanceSoFar, bundleBarsAndGapDist }
        } else if (nextBar.config.bundle) {
          bundleBarsAndGapDist.push({
            bar: nextBar,
            gapDistance: gapDistanceSoFar
          })
        }
        currentBar = nextBar
        nextBar = getNextGanttBar(nextBar, 'left')
      }
    }
    if (side === 'right') {
      while (nextBar) {
        const currentBarElem = document.getElementById(currentBar.config.id) as HTMLElement
        const nextBarElem = document.getElementById(nextBar.config.id) as HTMLElement
        const currentBarOffsetRight = currentBarElem.offsetLeft + currentBarElem.offsetWidth
        gapDistanceSoFar += nextBarElem.offsetLeft - currentBarOffsetRight
        if (nextBar.config.immobile) {
          return { gapDistanceSoFar, bundleBarsAndGapDist }
        } else if (nextBar.config.bundle) {
          bundleBarsAndGapDist.push({
            bar: nextBar,
            gapDistance: gapDistanceSoFar
          })
        }
        currentBar = nextBar
        nextBar = getNextGanttBar(nextBar, 'right')
      }
    }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist }
  }

  const getNextGanttBar = (bar: GanttBarObject, side: 'left' | 'right') => {
    const barElem = document.getElementById(bar.config.id) as HTMLElement
    const allBarsInRow = _getChartRows().find((row) => row.includes(bar)) || []
    let allBarsLeftOrRight = []
    if (side === 'left') {
      allBarsLeftOrRight = allBarsInRow.filter((otherBar) => {
        const otherBarElem = document.getElementById(otherBar.config.id) as HTMLElement
        return (
          otherBarElem &&
                    otherBarElem.offsetLeft < barElem.offsetLeft &&
                    otherBar.config.pushOnOverlap !== false
        )
      })
    } else {
      allBarsLeftOrRight = allBarsInRow.filter((otherBar) => {
        const otherBarElem = document.getElementById(otherBar.config.id) as HTMLElement
        return (
          otherBarElem &&
                    otherBarElem.offsetLeft > barElem.offsetLeft &&
                    otherBar.config.pushOnOverlap !== false
        )
      })
    }
    if (allBarsLeftOrRight.length > 0) {
      return allBarsLeftOrRight.reduce((bar1, bar2) => {
        const bar1Elem = document.getElementById(bar1.config.id) as HTMLElement
        const bar2Elem = document.getElementById(bar2.config.id) as HTMLElement
        const bar1Dist = Math.abs(bar1Elem.offsetLeft - barElem.offsetLeft)
        const bar2Dist = Math.abs(bar2Elem.offsetLeft - barElem.offsetLeft)
        return bar1Dist < bar2Dist ? bar1 : bar2
      }, allBarsLeftOrRight[0])
    } else {
      return null
    }
  }

  return {
    setDragLimitsOfGanttBar
  }
}
