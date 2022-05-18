import { computed } from '@nuxtjs/composition-api'
import { useAxios } from '~/composables/useAxios'
import { StarapiProduct } from '~/types/strapi/StarapiProduct'
import { StrapiRootArray } from '~/types/strapi/Strapi'

export const useProducts = () => {
  const { data, fetchData } =
    useAxios<StrapiRootArray<StarapiProduct>>('products')

  const products = computed(() => data.value?.data)
  const pagination = computed(() => data.value?.meta.pagination)
  fetchData()

  return {
    products,
    pagination,
  }
}
