import { Product } from '~/types/strapi/product'
import { CardItem } from '~/types/CardItem'
import { StrapiData } from '~/types/strapi/StrapiArray'

export const productMapper = (item: StrapiData<Product>): CardItem => {
  return {
    images: item.attributes.image.data.map(
      (i) => `http://localhost:1337${i.attributes.url}`
    ),
    description: item.attributes.description,
    detail: item,
    title: item.attributes.title,
    to: { name: 'products-id', params: { id: item.id.toString() } },
  }
}

export const productListMapper = (items?: StrapiData<Product>[]): CardItem[] =>
  items?.length ? [...items].map((p) => productMapper(p)) : []
