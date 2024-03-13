import type { InjectionKey, Ref } from 'vue';
import type { GanttBarObject, GanttChartConfig } from 'types/index';
export declare const DEFAULT_DATE_FORMAT = "YYYY-MM-DD HH:mm";
export type GetChartRows = () => GanttBarObject[][];
export type EmitBarEvent = (e: MouseEvent, bar: GanttBarObject, datetime?: string | Date, movedBars?: Map<GanttBarObject, {
    oldStart: string;
    oldEnd: string;
}>) => void;
export declare const CHART_ROWS_KEY: InjectionKey<GetChartRows>;
export declare const CONFIG_KEY: InjectionKey<GanttChartConfig>;
export declare const EMIT_BAR_EVENT_KEY: InjectionKey<EmitBarEvent>;
export declare const BAR_CONTAINER_KEY: InjectionKey<Ref<HTMLElement>>;
export declare const TOOLTIP_FORMATS: {
    readonly hour: "HH:mm";
    readonly day: "DD. MMM HH:mm";
    readonly month: "DD. MMMM YYYY";
};
export declare const DEFAULT_DOT_COLOR = "cadetblue";
