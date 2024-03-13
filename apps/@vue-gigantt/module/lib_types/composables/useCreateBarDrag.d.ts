import type { GanttChartConfig, GanttBarObject } from 'types/index';
export declare const useCreateBarDrag: (bar: GanttBarObject, onDrag?: (e: MouseEvent, bar: GanttBarObject) => void, onEndDrag?: (e: MouseEvent, bar: GanttBarObject) => void, config?: GanttChartConfig) => {
    isDragging: import("vue").Ref<boolean>;
    initDrag: (e: MouseEvent) => void;
};
