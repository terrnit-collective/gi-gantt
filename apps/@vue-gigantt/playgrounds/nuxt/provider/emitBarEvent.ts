import { inject } from 'vue'
import { EMIT_BAR_EVENT_KEY } from './constants'

export default function emitBarEvent() {
  const emitBarEvent = inject(EMIT_BAR_EVENT_KEY)
  if (!emitBarEvent) {
    throw Error('Failed to inject emitBarEvent!')
  }
  return emitBarEvent
}
