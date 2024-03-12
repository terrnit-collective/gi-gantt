<template>
  <div
    :id="barConfig.id"
    :class="cn('g-gantt-bar', barConfig.class ?? '')"
    :style="{
      ...barConfig.style,
      position: 'absolute',
      top: `${rowHeight * 0.1}px`,
      left: `${xStart}px`,
      width: `${xEnd - xStart}px`,
      height: `${rowHeight * 0.8}px`,
      zIndex: isDragging ? 3 : 2
    }"
    @mousedown="onMouseEvent"
    @click="onMouseEvent"
    @dblclick="onMouseEvent"
    @mouseenter="onMouseEvent"
    @mouseleave="onMouseEvent"
    @contextmenu="onMouseEvent"
  >
    <div class="g-gantt-bar-label">
      <slot :bar="bar">
        <div>
          {{ barConfig.label || "" }}
        </div>
      </slot>
    </div>
    <template v-if="barConfig.hasHandles && isHover">
      <div class="g-gantt-bar-handle-left" />
      <div class="g-gantt-bar-handle-right" />
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  computed, ref, toRefs, watch, inject
} from 'vue'

const props = defineProps<{
  bar: GanttBarObject
}>()
const _emitBarEvent = emitBarEvent()

// const { config } = storeToRefs(useGlobalStore())

// const { barStart, barEnd, width, chartStart, chartEnd, chartSize, rowHeight } = config.value
const config = inject(CONFIG_KEY)

const { barStart, barEnd, width, chartStart, chartEnd, chartSize, rowHeight } = config

const xStart = ref<number>(0)
const xEnd = ref<number>(0)
const isDragging = ref<boolean>(false)
const isHover = ref<boolean>(false)

const { bar } = toRefs(props)

const { mapTimeToPosition, mapPositionToTime } = useTimePositionMapping(config)
const { initDragOfBar, initDragOfBundle } = useBarDragManagement(config)
const { setDragLimitsOfGanttBar } = useBarDragLimit()

const barConfig = computed(() => bar.value.config)

function firstMousemoveCallback(e: MouseEvent) {
  barConfig.value.bundle != null ? initDragOfBundle(bar.value, e) : initDragOfBar(bar.value, e)
  isDragging.value = true
}

const prepareForDrag = () => {
  setDragLimitsOfGanttBar(bar.value)
  if (barConfig.value.immobile) {
    return
  }

  window.addEventListener('mousemove', firstMousemoveCallback, {
    once: true
  }) // on first mousemove event
  window.addEventListener(
    'mouseup',
    () => {
      // in case user does not move the mouse after mousedown at all
      window.removeEventListener('mousemove', firstMousemoveCallback)
      isDragging.value = false
      isHover.value = false
    },
    { once: true }
  )
}

const barContainerEl = inject(BAR_CONTAINER_KEY)

const onMouseEvent = (e: MouseEvent) => {
  e.preventDefault()

  if (e.type === 'mouseenter') {
    isHover.value = true
  }
  if (e.type === 'mouseleave') {
    isHover.value = false
  }
  if (e.type === 'mousedown') {
    prepareForDrag()
  }
  const barContainer = barContainerEl?.value?.getBoundingClientRect()
  if (!barContainer) {
    return
  }
  const datetime = mapPositionToTime(e.clientX - barContainer.left)
  _emitBarEvent(e, bar.value, datetime)
}

watch(
  [bar, width, chartStart, chartEnd, chartSize.width],
  () => {
    xStart.value = mapTimeToPosition(bar.value[barStart.value])
    xEnd.value = mapTimeToPosition(bar.value[barEnd.value])
  },
  { deep: true, immediate: true }
)
// onMounted(() => {
//   watch(
//     [bar, width, chartStart, chartEnd, chartSize.width],
//     () => {
//       xStart.value = mapTimeToPosition(bar.value[barStart.value])
//       xEnd.value = mapTimeToPosition(bar.value[barEnd.value])
//     },
//     { deep: true, immediate: true }
//   )
// })
</script>

<style>
.g-gantt-bar {
  @apply flex justify-center items-center overflow-hidden;
}

.g-gantt-bar-label {
  @apply w-full h-full box-border flex justify-center items-center;
}

.g-gantt-bar-label > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.g-gantt-bar-handle-left,
.g-gantt-bar-handle-right {
  position: absolute;
  width: 14px;
  height: 100%;
  background: white;
  opacity: 0.7;
  border-radius: 0px;
  cursor: ew-resize;
  top: 0;
}
.g-gantt-bar-handle-left {
  left: 0;
}
.g-gantt-bar-handle-right {
  right: 0;
}
.g-gantt-bar-label img {
  pointer-events: none;
}
</style>
