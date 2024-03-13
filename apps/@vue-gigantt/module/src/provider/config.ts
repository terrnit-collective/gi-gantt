import { inject } from 'vue'
import { CONFIG_KEY } from './constants'

export default function config() {
  const config = inject(CONFIG_KEY)
  if (!config) {
    throw Error('Failed to inject config!')
  }
  return config
}