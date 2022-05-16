import { Image } from '~/types/strapi/StrapiArray'

export const mapImagesToUrls = (images: Image) =>
  images.data.map((i) => `http://localhost:1337${i.attributes.url}`)
