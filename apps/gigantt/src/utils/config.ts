import { ref, toRaw, type App } from 'vue'
import {
  getValueByPath, merge, clone, setValueByPath
} from './helpers'

import { setVueInstance } from './plugins'
import type { GiganttOptions } from 'types/config'

declare module '../index' {
    interface GiganttProgrammatic {
        config: typeof ConfigProgrammatic;
    }
}

const globalOptions = ref<GiganttOptions>({
  iconPack: 'mdi',
  useHtml5Validation: true,
  statusIcon: true,
  transformClasses: undefined
})

export const setOptions = (options: GiganttOptions): void => {
  globalOptions.value = options
}

export const getOptions = (): GiganttOptions => {
  return clone(toRaw(globalOptions.value))
}

export const getOption = <T>(path: string, defaultValue?: T): T => {
  return getValueByPath(globalOptions.value, path, defaultValue)
}

export const setOption = <T>(path: string, defaultValue: T): void => {
  setValueByPath(globalOptions.value, path, defaultValue)
}

export const ConfigProgrammatic = {
  getOption,
  getOptions,
  setOption,
  setOptions(options: GiganttOptions): void {
    setOptions(merge(getOptions(), options, true))
  }
}

export const GiganttConfig = {
  install(app: App, options?: GiganttOptions): void {
    // set global vue instance
    setVueInstance(app)
    // set options
    setOptions(merge(getOptions(), options, true))
  }
}