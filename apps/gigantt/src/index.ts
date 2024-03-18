import * as plugins from './components/plugins'

import type { App, Plugin } from 'vue'
import { ConfigProgrammatic, GiganttConfig } from 'utils/config'
import { registerComponentProgrammatic, registerPlugin } from 'utils/plugins'

import type { GiganttOptions } from 'types/config'
// Days js
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween.js'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js'

function extendDayjs() {
  dayjs.extend(isSameOrBefore)
  dayjs.extend(isSameOrAfter)
  dayjs.extend(isBetween)
  dayjs.extend(customParseFormat)
}

// export all types
export * from './types'
export * from './components/types'

// export all vue components
export * from './components'
// export all components as vue plugin
export * from './components/plugins'

// export programmatic config
export {
  GiganttConfig,
  GiganttConfig as ConfigPlugin, // todo: remove export later - beaking change
  ConfigProgrammatic
}

// export programmatic composable
export { useGigantt } from 'utils/programmatic'

// main vue plugin
const plugin: Plugin = {
  install(app: App, options: GiganttOptions = {}) {
    // initialise dayjs
    extendDayjs()

    // initialise config with options
    app.use(GiganttConfig, options)

    // add all components
    for (const componentKey in plugins) {
      registerPlugin(app, plugins[componentKey])
    }

    // add programmatic config component
    registerComponentProgrammatic(app, 'config', ConfigProgrammatic)
  }
}

// export as default vue plugin
export { plugin as Gigantt }
export default plugin