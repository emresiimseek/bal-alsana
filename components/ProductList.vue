<template>
  <div v-if="items.length" class="product-container">
    <CardItem v-for="item in items" :key="item.title" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from '@nuxtjs/composition-api'
import { useProducts } from '~/composables/useProducts'
import { productListMapper } from '~/helper/mappers/ProductMapper'
import { CardItem } from '~/types/CardItem'

export default defineComponent({
  name: 'ProductList',
  setup() {
    const { products } = useProducts()

    const items: Ref<CardItem[]> = ref([])
    const mapProducts = () => {
      items.value = productListMapper(products.value)
    }
    watchEffect(() => products.value && mapProducts())
    return { items }
  },
})
</script>

<style lang="scss" scoped>
.product-container {
  padding-top: 2rem;
  gap: 3rem;
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;

  @include for-mobile {
    justify-content: center;
    display: flex;
    padding-top: 2rem;
    flex-wrap: wrap;
  }
}
</style>
