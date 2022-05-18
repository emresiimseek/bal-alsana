import type { RawLocation } from 'vue-router'
import { CarouselItem } from '~/types/CarouselItem'

export interface CardItem<T = any> {
  title: string
  description: string
  carouselItems: CarouselItem[]
  detail: T
  to: RawLocation
  coverImage: string
}
