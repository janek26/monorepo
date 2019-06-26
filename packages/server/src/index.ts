import { getText } from '@monorepo/common'

export const TEXT = getText()

export function server() {
  return TEXT
}
