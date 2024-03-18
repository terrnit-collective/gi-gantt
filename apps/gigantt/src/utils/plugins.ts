import type { App, Component, Plugin } from 'vue'
import { addProgrammatic, useGigantt } from './programmatic'

export let VueInstance: App

/** set the global vue instance */
export const setVueInstance = (Vue: App): void => {
  VueInstance = Vue
}

/** register a plugin to the vue app instance */
export const registerPlugin = (app: App, plugin: Plugin): void => {
  app.use(plugin)
}

/** register a component to the vue app instance */
export const registerComponent = (app: App, component: Component): void => {
  app.component(component.name, component)
}

/** register a global programmatic component to the gigantt object */
export const registerComponentProgrammatic = (
  app: App,
  property: string,
  component: Component
): void => {
  // set global vue instance
  setVueInstance(app)
  // use composable for unified access to programmatic gigantt object
  const gigantt = useGigantt()
  // add component (manipulates the programmatic gigantt object)
  addProgrammatic(property, component)

  // add provide and $gigantt (only needed once)
  if (!(app._context.provides && app._context.provides.gigantt))
    app.provide('gigantt', gigantt)
  if (!app.config.globalProperties.$oruga)
    app.config.globalProperties.$oruga = gigantt
}