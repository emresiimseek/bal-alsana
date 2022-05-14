import { Attributes, Image } from '~/types/strapi/StrapiArray'

export interface Product extends Attributes {
  title: string
  description: string
  image: Image
  price: number
}
