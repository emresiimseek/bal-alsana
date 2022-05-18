import { CarouselImage } from '@/types/strapi/StarapiImage'

export interface StarapiCarousel {
  title: string
  url: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  image: CarouselImage
}
