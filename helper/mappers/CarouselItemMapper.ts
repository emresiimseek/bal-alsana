import { StrapiData } from '~/types/strapi/Strapi'
import { ImageData } from '@/types/strapi/StarapiImage'
import { CarouselItem } from '~/types/CarouselItem'
import { StarapiCarousel } from '~/types/strapi/StarapiCarousel'

export const mapImagesToUrls = (img: ImageData) =>
  `https://sheltered-thicket-51938.herokuapp.com${img.attributes.url}`

export const mapCarousel = (
  items: StrapiData<StarapiCarousel>[]
): CarouselItem[] => {
  return items.map((ci) => ({
    img: mapImagesToUrls(ci.attributes.image.data),
    to: ci.attributes.url,
    title: ci.attributes.title,
    description: ci.attributes.description,
  }))
}
