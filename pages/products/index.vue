<template>
  <ProductList />
</template>
<router>{meta: { navName: 'Ürünler' }}</router>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ProductList from '@/components/ProductList.vue'

export default defineComponent({
  components: { ProductList },
})
</script>
