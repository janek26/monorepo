import { getText } from '@monorepo/common'

export const TEXT = getText()

export function reactApp() {
  // tslint:disable-next-line: no-console
  console.log(TEXT)
  return TEXT
}
