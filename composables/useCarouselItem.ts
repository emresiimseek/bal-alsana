import { computed } from '@nuxtjs/composition-api'
import { useAxios } from '~/composables/useAxios'
import { StrapiRootArray } from '~/types/strapi/Strapi'
import { StarapiCarousel } from '~/types/strapi/StarapiCarousel'

export const useCarouselItem = () => {
  const { data, fetchData } =
    useAxios<StrapiRootArray<StarapiCarousel>>(`carousel-items`)

  const response = computed(() => data.value?.data)
  fetchData()

  return { response }
}
