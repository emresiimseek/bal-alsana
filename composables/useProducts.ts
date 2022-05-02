import { computed } from '@nuxtjs/composition-api'
import { useAxios } from '~/composables/useAxios'
import { Product } from '~/types/strapi/product'
import { StrapiRootArray } from '~/types/strapi/StrapiArray'

export const useProducts = () => {
  const { data, fetchData } = useAxios<StrapiRootArray<Product>>('products')

  const products = computed(() => data.value?.data)
  const pagination = computed(() => data.value?.meta.pagination)
  fetchData()

  return {
    products,
    pagination,
  }
}
