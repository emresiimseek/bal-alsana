import { Ref, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export const useAxios = <T = any>(url: string) => {
  const data: Ref<T | undefined> = ref()
  const { $axios } = useContext()

  const { fetch: fetchData } = useFetch(async () => {
    data.value = await $axios.$get<T>(url, { params: { populate: '*' } })
  })

  return { data, fetchData }
}
