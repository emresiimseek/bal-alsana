<template>
  <div>
    <div v-if="items.length" class="home-container">
      <BaCarousel
        :items="items"
        class="home-carousel"
        has-control
        :interval="5000"
        has-icon-down
      />
    </div>
    <BaSpinner v-else />
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
@include for-desktop {
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
}

@include for-mobile {
  .home-carousel {
    height: calc(100vh - var(--mobile-header-height));

    .carousel-item {
      height: calc(100vh - var(--mobile-header-height));

      img {
        height: calc(100vh - var(--mobile-header-height));
        object-fit: cover;
      }
    }
  }
}
</style>
