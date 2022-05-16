import { computed } from '@nuxtjs/composition-api'
import { useAxios } from '~/composables/useAxios'
import { HomePageCarousel, StrapiRoot } from '~/types/strapi/StrapiArray'

export const useHomePageBackground = () => {
  const { data, fetchData } =
    useAxios<StrapiRoot<HomePageCarousel>>(`home-page-image`)

  const response = computed(() => data.value?.data)
  fetchData()

  return { response }
}
