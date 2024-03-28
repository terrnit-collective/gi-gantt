<script setup lang="ts">
import { GiGanttChart, GiGanttBar, GiGanttRow } from '@vue-gigantt/module'
import { ref } from 'vue'
const listData = ref([
  {
    myBeginDate: '2024-07-04 00:00',
    myEndDate: '2024-07-14 02:00',
    config: {
      id: 'another-unique-id-2',
      hasHandles: true,
      label: 'Hey, look at me',
      class: 'bg-green-500 rounded-xl text-white'
    }
  },
  {
    myBeginDate: '2024-08-04 00:00',
    myEndDate: '2024-08-14 02:00',
    config: {
      id: 'another-unique-id-4',
      hasHandles: true,
      label: 'Hey, look at measdasd',
      class: 'bg-green-500 rounded-xl text-white'
    }
  }
])

</script>


<template>
 <gi-gantt-chart
      chart-start="2024-07-02 12:00"
      chart-end="2024-08-22 12:00"
      precision="day"
      bar-start="myBeginDate"
      bar-end="myEndDate"
      push-on-overlap
    >
      <template #timeunit="{ value }">
        <div class="w-full flex justify-center">
          <span class="text-zinc-400 text-[12px]">{{ value }}</span>
        </div>
      </template>
      <gi-gantt-row
        :bars="listData"
      >
        <template #item="{data}">
          <gi-gantt-bar :bar="data" />
        </template>
      </gi-gantt-row>
    </gi-gantt-chart>
</template>

