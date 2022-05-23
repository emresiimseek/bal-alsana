<template>
  <div class="container container-blogs">
    <CardItem v-for="item in items" :key="item.title" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watchEffect } from '@nuxtjs/composition-api'
import { CardItem } from '@/types/CardItem'
import { useBlogs } from '@/composables/useBlogs'
import { blogsMapper } from '@/helper/mappers/blogMapper'

export default defineComponent({
  setup() {
    const { blogs } = useBlogs()

    const items: Ref<CardItem[]> = ref([])

    const mapBlogs = () => {
      if (blogs.value?.length) items.value = blogsMapper(blogs.value)
    }

    watchEffect(() => blogs.value && mapBlogs())

    return { items }
  },
})
</script>

<style scoped>
.container-blogs {
  padding-top: 2rem;
}
</style>
