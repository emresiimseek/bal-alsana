import { Attributes } from '~/types/strapi/Strapi'
import { Image } from '@/types/strapi/StarapiImage'

export interface StarapiProduct extends Attributes {
  title: string
  description: string
  image: Image
  price: number
}
