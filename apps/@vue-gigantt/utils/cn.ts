import { twMerge } from 'tailwind-merge'
import clsx from './clsx'

export default function(...inputs: string[]) {
  return twMerge(clsx(inputs))
}
