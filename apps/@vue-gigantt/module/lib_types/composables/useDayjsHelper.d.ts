import dayjs, { type Dayjs } from 'dayjs';
import type { GanttChartConfig, GanttBarObject } from 'types/index';
export declare const DEFAULT_DATE_FORMAT = "YYYY-MM-DD HH:mm";
export declare const useDayjsHelper: (config?: GanttChartConfig) => {
    chartStartDayjs: import("vue").ComputedRef<dayjs.Dayjs>;
    chartEndDayjs: import("vue").ComputedRef<dayjs.Dayjs>;
    toDayjs: (input: string | Date | GanttBarObject, startOrEnd?: 'start' | 'end') => dayjs.Dayjs;
    format: (input: string | Date | Dayjs, pattern?: string | false) => string | Date;
};
