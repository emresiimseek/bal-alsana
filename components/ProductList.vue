<template>
  <div class="product-container">
    <CardItem v-for="item in cardItems" :key="item.title" :item="item" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { useProducts } from '~/composables/useProducts'
import { productListMapper } from '~/helper/mappers/ProductMapper'
import { Product } from '~/types/strapi/product'

export default defineComponent({
  name: 'ProductList',
  setup() {
    const { products } = useProducts()

    const items = computed(
      () =>
        products.value?.map(
          (x): Product => ({
            ...x.attributes,
            id: x.id,
          })
        ) ?? []
    )

    const cardItems = computed(() => productListMapper(items.value))

    return { cardItems }
  },
})
</script>

<style lang="scss" scoped>
.product-container {
  display: flex;
  padding-top: 2rem;
  flex-wrap: wrap;

  @include for-mobile {
    justify-content: center;
    display: flex;
    padding-top: 2rem;
    flex-wrap: wrap;
  }
}

.product-container {
}
</style>
