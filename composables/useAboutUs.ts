import { computed } from '@nuxtjs/composition-api'
import { useAxios } from '~/composables/useAxios'
import { StrapiRoot } from '~/types/strapi/Strapi'
import { StarapiAboutMe } from '~/types/strapi/StarapiAboutMe'

export const useAboutUs = () => {
  const { data, fetchData } = useAxios<StrapiRoot<StarapiAboutMe>>(`about-me`)

  const aboutMe = computed(() => data.value?.data)
  fetchData()

  return { aboutMe }
}
