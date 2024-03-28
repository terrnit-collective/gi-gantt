<template>
  <div>
    <slot
      name="nodeTemplate"
      :row-data="rowData"
      :default-order="defaultOrder"
      :depth="depth"
      :on-open="open"
      :on-toggle="toggle"
      :on-close="close"
    >
      <tree-default-node
        :row-data="rowData"
        :default-order="defaultOrder"
        :depth="depth"
        :on-open="open"
        :on-toggle="toggle"
        :on-close="close"
      />
    </slot>

    <template v-if="isOpen">
      <template
        v-for="(child, index) in rowData.children"
      >
        <tree-node
          v-if="!isLeaf(child)"
          :key="index"
          :depth="depth+1"
          :row-data="child"
          :default-order="defaultOrder"
        >
          <template #leafTemplate="leafProps">
            <slot
              name="leafTemplate"
              v-bind="leafProps"
            />
          </template>

          <template #nodeTemplate="nodeProps">
            <slot
              name="nodeTemplate"
              v-bind="nodeProps"
            />
          </template>
        </tree-node>

        <tree-leaf
          v-if="isLeaf(child)"
          :key="index"
          :depth="depth+1"
          :row-data="child"
          :default-order="defaultOrder"
        >
          <template #leafTemplate="leafProps">
            <slot
              name="leafTemplate"
              v-bind="leafProps"
            />
          </template>
        </tree-leaf>
      </template>
    </template>
  </div>
</template>

<script>
import { TreeNode, TreeLeaf, TreeDefaultNode } from 'components/plugins'

export default {
  name: 'TreeNode',

  components: {
    TreeDefaultNode, TreeLeaf, TreeNode
  },
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
        return []
      }
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {

    isLeaf(rowData) {
      if(!rowData.children) {
        return true
      }
      return false
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    }
  }
}
</script>
