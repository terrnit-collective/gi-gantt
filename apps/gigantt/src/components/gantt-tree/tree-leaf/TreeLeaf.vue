<template>
  <div>
    <slot
      name="leafTemplate"
      :row-data="rowData"
      :default-order="defaultOrder"
      :depth="depth"
    >
      <tree-default-leaf
        :row-data="rowData"
        :default-order="defaultOrder"
        :depth="depth"
      />
    </slot>
  </div>
</template>

<script>
import { TreeDefaultLeaf } from 'components/plugins'

export default {
  name: 'TreeLeaf',

  components: { TreeDefaultLeaf },
  props: {
    rowData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    defaultOrder: {
      type: Array,
      default: () => {
        return {}
      }
    },
    depth: {
      type: Number,
      default: 0
    }
  }
}
</script>