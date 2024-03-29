import { StarapiBlog } from '~/types/strapi/StarapiBlog'
import { StrapiData } from '~/types/strapi/Strapi'
import { CardItem } from '~/types/CardItem'

export const blogMapper = (item: StrapiData<StarapiBlog>): CardItem => ({
  title: item.attributes.title,
  detail: item,
  description: item.attributes.detail,
  to: { name: 'blogs-id', params: { id: item.id.toString() } },
  coverImage: item.attributes.images.data[0].attributes.url,
  carouselItems: item.attributes.images.data.map((i) => ({
    img: i.attributes.url,
  })),
})

export const blogsMapper = (items: StrapiData<StarapiBlog>[]) =>
  items.map((b) => blogMapper(b))
