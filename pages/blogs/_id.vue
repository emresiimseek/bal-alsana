<template>
  <div v-if="item" class="container container-blog">
    <h1>{{ item.title }}</h1>
    <div id="editor" v-html="$md.render(item.detail.attributes.detail)"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
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

    watchEffect(() => blog.value && mapBlog())

    return { item }
  },
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
