import GanttBar from 'components/gantt-bar/GanttBar.vue'
import GanttBarTooltip from 'components/gantt-bar-tooltip/GanttBarTooltip.vue'
import GanttChart from 'components/gantt-chart/GanttChart.vue'
import GanttGrid from 'components/gantt-grid/GanttGrid.vue'
import GanttRow from 'components/gantt-row/GanttRow.vue'
import GanttTimeAxis from 'components/gantt-time-axis/GanttTimeAxis.vue'

// re-write export login cuz its cause Circular dependencies (also known as cyclic dependencies)
// (A -> B -> A)
// import TreeBody from 'components/gantt-tree/tree-body/TreeBody.vue'
// import TreeDefaultNode from 'components/gantt-tree/tree-default-node/TreeDefaultNode.vue'
// import TreeDefaultLeaf from 'components/gantt-tree/tree-default-leaf/TreeDefaultLeaf.vue'
// import TreeLeaf from 'components/gantt-tree/tree-leaf/TreeLeaf.vue'
// import TreeNode from 'components/gantt-tree/tree-node/TreeNode.vue'
// import TreeTable from 'components/gantt-tree/tree-table/TreeTable.vue'
// import TreeTableHeader from 'components/gantt-tree/tree-table-header/TreeTableHeader.vue'

export {
  GanttBar,
  GanttChart,
  GanttBarTooltip,
  GanttRow,
  GanttGrid,
  GanttTimeAxis
//   TreeBody,
//   TreeDefaultNode,
//   TreeDefaultLeaf,
//   TreeLeaf,
//   TreeNode,
//   TreeTable,
//   TreeTableHeader
}