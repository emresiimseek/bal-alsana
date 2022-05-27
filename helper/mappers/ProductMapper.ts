import { StarapiProduct } from '~/types/strapi/StarapiProduct'
import { CardItem } from '~/types/CardItem'
import { StrapiData } from '~/types/strapi/Strapi'

export const productMapper = (item: StrapiData<StarapiProduct>): CardItem => {
  return {
    carouselItems: item.attributes.image.data.map((i) => ({
      img: i.attributes.url,
    })),
    description: item.attributes.description,
    detail: item,
    title: item.attributes.title,
    to: { name: 'products-id', params: { id: item.id.toString() } },
    coverImage: item.attributes.image.data[0].attributes.url,
  }
}

export const productListMapper = (
  items?: StrapiData<StarapiProduct>[]
): CardItem[] => (items?.length ? [...items].map((p) => productMapper(p)) : [])
