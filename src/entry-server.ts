import { KlbHandleSSR } from '@fy-/components'
import { createApp } from './main'

export async function render(cb: any) {
  return await KlbHandleSSR(createApp, cb, { url: undefined })
}
