import type { GanttBarObject } from 'types/index';
export declare const useBarDragManagement: () => {
    initDragOfBar: (bar: GanttBarObject, e: MouseEvent) => void;
    initDragOfBundle: (mainBar: GanttBarObject, e: MouseEvent) => void;
};
