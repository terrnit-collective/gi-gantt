<template>
  <div class="g-timeaxis tw-border tw-border-zinc-300 tw-rounded-t-md">
    <div class="g-timeunits-container">
      <div
        v-for="({ label, value, date, width }, index) in timeaxisUnits.upperUnits"
        :key="label"
        :class="cn('g-upper-timeunit', '')"
        :style="{
          background: index % 2 === 0 ? colors.primary : colors.secondary,
          color: colors.text,
          width
        }"
      >
        <slot
          name="upper-timeunit"
          :label="label"
          :value="value"
          :date="date"
        >
          {{ label }}
        </slot>
      </div>
    </div>

    <div class="g-timeunits-container">
      <div
        v-for="({ label, value, date, width }, index) in timeaxisUnits.lowerUnits"
        :key="label"
        :class="cn('g-timeunit', 'tw-border-zinc-300 tw-border-t tw-border-r')"
        :style="{
          background: index % 2 === 0 ? colors.ternary : colors.quartenary,
          color: colors.text,
          flexDirection: precision === 'hour' ? 'column' : 'row',
          alignItems: precision === 'hour' ? '' : 'center',
          width
        }"
      >
        <slot
          name="timeunit"
          :label="label"
          :value="value"
          :date="date"
        >
          {{ label }}
        </slot>
        <div
          v-if="precision === 'hour'"
          class="g-timeaxis-hour-pin"
          :style="{ background: colors.text }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { config } from 'provider/index'
import { useTimeaxisUnits } from 'composables/index'
import { cn } from 'utils/index'

const { precision, colors } = config()
const { timeaxisUnits } = useTimeaxisUnits()
</script>

  <style>
  .g-timeaxis {
	position: sticky;
	top: 0;
	width: 100%;
	height: 8vh;
	min-height: 75px;
	background: white;
	z-index: 10;
	display: flex;
	flex-direction: column;
  }

  .g-timeunits-container {
	display: flex;
	width: 100%;
	height: 50%;
  }

  .g-timeunit {
	height: 100%;
	font-size: 65%;
	display: flex;
	flex-direction: column;
	justify-content: center;
  }

  .g-upper-timeunit {
	display: flex;
	height: 100%;
	padding-left: 12px;
	align-items: center;
  }

  .g-upper-timeunit:last-child {
	@apply tw-rounded-tr-md;
  }
  .g-upper-timeunit:first-child {
	@apply tw-rounded-tl-md;
  }

  .g-timeaxis-hour-pin {
	width: 1px;
	height: 10px;
  }
  </style>