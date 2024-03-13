import { toVal } from './to-val'
export default function() {
  let i=0, tmp, x, str='', len=arguments.length
  for (; i < len; i++) {
    // eslint-disable-next-line no-cond-assign
    if (tmp = arguments[i]) {
      // eslint-disable-next-line no-cond-assign
      if (x = toVal(tmp)) {
        str && (str += ' ')
        str += x
      }
    }
  }
  return str
}