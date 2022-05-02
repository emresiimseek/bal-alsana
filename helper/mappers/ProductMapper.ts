import { Product } from '~/types/strapi/product'
import { CardItem } from '~/types/CardItem'

export const productMapper = (item: Product): CardItem => ({
  image: 'http://localhost:1337' + item.image.data[0].attributes.url,
  description: item.description,
  detail: item,
  title: item.title,
  to: { name: 'products-id', params: { id: item.id.toString() } },
})

export const productListMapper = (items: Product[]): CardItem[] =>
  items.map((p) => productMapper(p))
