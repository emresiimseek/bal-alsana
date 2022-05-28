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
      <BaVueSlickCarousel v-if="itemsProducts.length" class="products-carousel">
        <CardItem
          v-for="(item, index) in itemsProducts"
          :key="index"
          :item="item"
          class="product-card-item"
        />
      </BaVueSlickCarousel>
    </div>
    <BaSpinner v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from '@nuxtjs/composition-api'
import { useCarouselItem } from '~/composables/useCarouselItem'
import { mapCarousel } from '~/helper/mappers/CarouselItemMapper'
import { CarouselItem } from '~/types/CarouselItem'
import BaVueSlickCarousel from '~/components/BaVueSlickCarousel.vue'
import { productListMapper } from '~/helper/mappers/ProductMapper'
import { useProducts } from '~/composables/useProducts'
import { CardItem } from '~/types/CardItem'

export default defineComponent({
  components: { BaVueSlickCarousel },
  setup() {
    const { response } = useCarouselItem()
    const { products } = useProducts()

    const items: Ref<CarouselItem[]> = ref([])
    const itemsProducts: Ref<CardItem[]> = ref([])

    const mapProducts = () => {
      itemsProducts.value = productListMapper(products.value)
    }

    const mapCarouselItem = () => {
      if (!response.value?.length) return
      items.value = mapCarousel(response.value)
    }

    watchEffect(() => mapCarouselItem())
    watchEffect(() => mapProducts())

    return { items, response, itemsProducts }
  },
})
</script>
<style lang="scss">
.products-carousel {
  padding: 3rem 0 3rem 0;

  .product-card-item {
    padding: 1rem;
  }
}

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
