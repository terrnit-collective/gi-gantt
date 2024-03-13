import type { GanttChartConfig } from 'types/index';
export declare const useTimePositionMapping: (config?: GanttChartConfig) => {
    mapTimeToPosition: (time: string) => number;
    mapPositionToTime: (xPos: number) => string | Date;
};
