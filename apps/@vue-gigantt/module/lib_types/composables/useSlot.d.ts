import { Slot } from 'vue';
export declare const useSlot: () => {
    hasSlotContent: (slot: Slot | undefined, slotProps?: {}) => boolean;
    isSlotExist: (slotName: string) => boolean;
};
