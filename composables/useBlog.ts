import { computed } from '@nuxtjs/composition-api'
import { useAxios } from '~/composables/useAxios'
import { StrapiRoot } from '~/types/strapi/Strapi'
import { StarapiBlog } from '~/types/strapi/StarapiBlog'

export const useBlog = (id: string) => {
  const { data, fetchData } = useAxios<StrapiRoot<StarapiBlog>>(`blogs/${id}`)

  const blog = computed(() => data.value?.data)
  const pagination = computed(() => data.value?.meta.pagination)
  fetchData()

  return { blog, pagination }
}
