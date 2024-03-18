// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toVal = (mix: string | any[]) => {
  let k, y, str=''

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      const len=mix.length
      for (k=0; k < len; k++) {
        if (mix[k]) {
          // eslint-disable-next-line no-cond-assign
          if (y = toVal(mix[k])) {
            str && (str += ' ')
            str += y
          }
        }
      }
    } else {
      for (y in mix) {
        if (mix[y]) {
          str && (str += ' ')
          str += y
        }
      }
    }
  }

  return str
}
