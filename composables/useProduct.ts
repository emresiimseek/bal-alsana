import { computed } from '@nuxtjs/composition-api'
import { useAxios } from '~/composables/useAxios'
import { Product } from '~/types/strapi/product'
import { StrapiRoot } from '~/types/strapi/StrapiArray'

export const useProduct = (id: string) => {
  const { data, fetchData } = useAxios<StrapiRoot<Product>>(`products/${id}`)

  const product = computed(() => data.value?.data)
  const pagination = computed(() => data.value?.meta.pagination)
  fetchData()

  return { product, pagination }
}
