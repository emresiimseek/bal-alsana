<template>
  <div class="home-container">
    <BaCarousel
      :items="items"
      class="home-carousel"
      has-control
      :interval="10000"
      has-icon-down
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from '@nuxtjs/composition-api'
import { useCarouselItem } from '~/composables/useCarouselItem'
import { mapCarousel } from '~/helper/mappers/CarouselItemMapper'
import { CarouselItem } from '~/types/CarouselItem'

export default defineComponent({
  components: {},
  setup() {
    const { response } = useCarouselItem()
    const items: Ref<CarouselItem[]> = ref([])

    const mapCarouselItem = () => {
      if (!response.value?.length) return
      items.value = mapCarousel(response.value)
    }

    watchEffect(() => mapCarouselItem())

    return { items, response }
  },
})
</script>
<style lang="scss">
.home-carousel {
  height: calc(100vh - var(--desktop-nav-height));

  .carousel-item {
    height: calc(100vh - var(--desktop-nav-height));

    img {
      height: calc(100vh - var(--desktop-nav-height));
      object-fit: cover;
    }
  }
}
</style>
