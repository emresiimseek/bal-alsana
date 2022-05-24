import { computed } from '@nuxtjs/composition-api'
import { useAxios } from '~/composables/useAxios'
import { StrapiRoot } from '~/types/strapi/Strapi'
import { StarapiFooter } from '~/types/strapi/StarapiFooter'

export const useFooter = () => {
  const { data, fetchData } = useAxios<StrapiRoot<StarapiFooter>>(`footer`)

  const footer = computed(() => data.value?.data)

  fetchData()

  return { footer }
}
