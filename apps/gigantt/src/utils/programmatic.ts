import type { GiganttProgrammatic } from 'types/index'
import { ref } from 'vue'

/** Oruga object for programmatic components */
const gigantt = ref<GiganttProgrammatic>({} as GiganttProgrammatic)

/** Add components to the oruga object */
export function addProgrammatic(property: string, component: object): void {
  gigantt.value[property] = component
}

/** Composable for internal and external usage of programmatic components*/
export function useGigantt(): GiganttProgrammatic {
  return gigantt.value
}