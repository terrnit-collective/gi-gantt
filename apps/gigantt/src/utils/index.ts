import { twMerge } from 'tailwind-merge'

export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toVal(mix: string | any[]) {
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
      // eslint-disable-next-line
	  // @ts-ignore
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

export function clsx(inputs: string[]) {
// eslint-disable-next-line prefer-const
  let i=0, tmp, x, str='', len=inputs.length
  for (; i < len; i++) {
    // eslint-disable-next-line no-cond-assign
    if (tmp = inputs[i]) {
      // eslint-disable-next-line no-cond-assign
      if (x = toVal(tmp)) {
        str && (str += ' ')
        str += x
      }
    }
  }
  return str
}

export default clsx