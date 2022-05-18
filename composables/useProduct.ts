import { computed } from '@nuxtjs/composition-api'
import { useAxios } from '~/composables/useAxios'
import { StarapiProduct } from '~/types/strapi/StarapiProduct'
import { StrapiRoot } from '~/types/strapi/Strapi'

export const useProduct = (id: string) => {
  const { data, fetchData } = useAxios<StrapiRoot<StarapiProduct>>(
    `products/${id}`
  )

  const product = computed(() => data.value?.data)
  const pagination = computed(() => data.value?.meta.pagination)
  fetchData()

  return { product, pagination }
}
