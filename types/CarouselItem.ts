import { RawLocation } from 'vue-router'

export interface CarouselItem {
  img: string
  title?: string
  description?: string
  to?: RawLocation
}
