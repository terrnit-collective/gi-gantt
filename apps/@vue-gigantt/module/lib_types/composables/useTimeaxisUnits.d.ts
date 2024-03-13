export declare const useTimeaxisUnits: () => {
    timeaxisUnits: import("vue").ComputedRef<{
        upperUnits: {
            label: string;
            value?: string;
            date: Date;
            width?: string;
        }[];
        lowerUnits: {
            label: string;
            value?: string;
            date: Date;
            width?: string;
        }[];
    }>;
};
