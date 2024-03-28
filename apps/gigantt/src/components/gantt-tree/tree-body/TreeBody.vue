<template>
  <div>
    <template
      v-for="rowData in tableData"
      :row-data="rowData"
    >
      <tree-node
        v-if="!isLeaf(rowData)"
        :key="rowData.uuid"
        :row-data="rowData"
        :depth="0"
        :default-order="columns"
      >
        <template #nodeTemplate="nodeProps">
          <slot
            name="nodeTemplate"
            v-bind="nodeProps"
          />
        </template>

        <template #leafTemplate="leafProps">
          <slot
            name="leafTemplate"
            v-bind="leafProps"
          />
        </template>
      </tree-node>

      <tree-leaf
        v-if="isLeaf(rowData)"
        :key="rowData.uuid"
        :row-data="rowData"
        :depth="0"
        :default-order="columns"
      >
        <template #leafTemplate="leafProps">
          <slot
            name="leafTemplate"
            v-bind="leafProps"
          />
        </template>
      </tree-leaf>
    </template>
  </div>
</template>

<script>
import { TreeLeaf, TreeNode } from 'components/plugins'

export default {
  name: 'TreeBody',

  components: { TreeLeaf, TreeNode },
  props: {
    tableData: {
      type: Array,
      default: function() {
        return []
      }
    },
    columns: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    isLeaf(rowData) {
      if(!rowData.children) {
        return true
      }
      return false
    }
  }
}
</script>

  <style scoped>
  </style>