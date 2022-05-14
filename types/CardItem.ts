import type { RawLocation } from 'vue-router'

export interface CardItem<T = any> {
  title: string
  description: string
  images: string[]
  detail: T
  to: RawLocation
  coverImage: string
}
