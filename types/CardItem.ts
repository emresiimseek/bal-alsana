import type { RawLocation } from 'vue-router'

export interface CardItem<T = any> {
  title: string
  description: string
  image: string
  detail: T
  to: RawLocation
}
