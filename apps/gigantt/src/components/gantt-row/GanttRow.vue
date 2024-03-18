<template>
  <div
    class="g-gantt-row"
    :style="rowStyle"
    @dragover.prevent="isHovering = true"
    @dragleave="isHovering = false"
    @drop="onDrop($event)"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div
      v-if="!hideLabel && label"
      class="g-gantt-row-label"
      :style="{ background: colors.primary, color: colors.text }"
    >
      <slot
        v-if="isSlotExist('default')"
        :label="label"
        name="default"
      />
      <template v-else>
        {{ label }}
      </template>
    </div>
    <div
      ref="barContainer"
      class="g-gantt-row-bars-container"
      v-bind="$attrs"
    >
      <transition-group
        name="bar-transition"
        tag="div"
      >
        <template
          v-if="isSlotExist('bar')"
        >
          <slot
            v-for="bar in bars"
            :key="bar.config.id"
            :data="bar"
            name="item"
          />
        </template>
        <template
          v-else
        >
          <gantt-bar
            v-for="bar in bars"
            :key="bar.config.id"
            :bar="bar"
          />
        </template>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  type StyleValue,
  type Ref,
  ref,
  toRefs,
  computed,
  provide
} from 'vue'

import { useTimePositionMapping, useSlot } from 'composables/index'
import { config } from 'provider/index'
import type { GanttBarObject } from 'types/index'
import { GanttBar } from 'components/index'
import { BAR_CONTAINER_KEY } from 'provider/constants'

interface Props {
  label?: string
  bars: GanttBarObject[]
  highlightOnHover?: boolean
  hideLabel?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{(e: 'drop', value: { e: MouseEvent; datetime: string | Date }): void }>()

const { rowHeight, colors } = config()
const { highlightOnHover } = toRefs(props)
const isHovering = ref(false)

const rowStyle = computed(() => {
  return {
    height: `${rowHeight.value}px`,
    background: highlightOnHover?.value && isHovering.value ? colors.value.hoverHighlight : null
  } as StyleValue
})

const { mapPositionToTime } = useTimePositionMapping()
const { isSlotExist } = useSlot()
const barContainer: Ref<HTMLElement | null> = ref(null)

provide(BAR_CONTAINER_KEY, barContainer)

const onDrop = (e: MouseEvent) => {
  const container = barContainer.value?.getBoundingClientRect()
  if (!container) {
    console.error('Gantt: failed to find bar container element for row.')
    return
  }
  const xPos = e.clientX - container.left
  const datetime = mapPositionToTime(xPos)
  emit('drop', { e, datetime })
}
</script>

  <style>
  .g-gantt-row {
	width: 100%;
	transition: background 0.4s;
	position: relative;
  }

  .g-gantt-row > .g-gantt-row-bars-container {
	position: relative;
	width: 100%;
  }

  .g-gantt-row-label {
	position: absolute;
	top: 0;
	left: 0px;
	padding: 0px 8px;
	display: flex;
	align-items: center;
	height: 60%;
	min-height: 20px;
	font-size: 0.8em;
	font-weight: bold;
	border-bottom-right-radius: 6px;
	background: #f2f2f2;
	z-index: 3;
	box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
  }

  .bar-transition-leave-active,
  .bar-transition-enter-active {
	transition: all 0.2s;
  }

  .bar-transition-enter-from,
  .bar-transition-leave-to {
	transform: scale(0.8);
	opacity: 0;
  }
  </style>