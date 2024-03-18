import type { ComponentConfigBase } from 'types/index'
//   DynamicComponent
//   ClassDefinition,

declare module '../index' {
    interface GiganttOptions {
        ganttrow?: ComponentConfigBase &
         Partial<{
             /** Icon to be shown */
             icon: string
         }>
    }
}