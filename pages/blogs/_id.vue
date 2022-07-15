<template>
  <div>
    <div v-if="item" class="container container-blog">
      <h1>{{ item.title }}</h1>
      <div id="editor" v-html="$md.render(item.detail.attributes.detail)"></div>
    </div>
    <BaSpinner v-else />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
  useMeta,
  useRoute,
  watchEffect,
} from '@nuxtjs/composition-api'
import { CardItem } from '~/types/CardItem'
import { blogMapper } from '~/helper/mappers/blogMapper'
import { useBlog } from '~/composables/useBlog'

export default defineComponent({
  components: {},
  setup() {
    const route = useRoute()

    const { blog } = useBlog(route.value.params.id)
    const item: Ref<CardItem | null> = ref(null)

    const mapBlog = () => {
      if (blog.value) item.value = blogMapper(blog.value)
    }

    const { title, meta } = useMeta()
    title.value = 'Merhaba'
    meta.value = [
      {
        hid: 'description',
        name: 'description',
        content: 'Selam',
      },
    ]

    watchEffect(() => blog.value && mapBlog())

    return { item, blog }
  },
  head: {},
})
</script>

<style>
.container-blog {
  padding-top: 2rem;
}

#editor p > img {
  width: 100%;
  padding: 1rem 0 1rem 0;
}
</style>
