import { computed } from '@nuxtjs/composition-api'
import { useAxios } from '~/composables/useAxios'
import { StrapiRootArray } from '~/types/strapi/Strapi'
import { StarapiBlog } from '~/types/strapi/StarapiBlog'

export const useBlogs = () => {
  const { data, fetchData } = useAxios<StrapiRootArray<StarapiBlog>>('blogs')

  const blogs = computed(() => data.value?.data)
  const pagination = computed(() => data.value?.meta.pagination)
  fetchData()

  return {
    blogs,
    pagination,
  }
}
