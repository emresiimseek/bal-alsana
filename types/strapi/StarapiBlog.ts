import { Image } from '~/types/strapi/StarapiImage'

export interface Gallery {
  data?: any
}

export interface StarapiBlog {
  title: string
  detail: string
  images: Image
}
