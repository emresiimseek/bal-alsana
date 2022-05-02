<template>
  <div>
    {{ item }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'
import { useProduct } from '~/composables/useProduct'

export default defineComponent({
  components: {},
  setup() {
    const route = useRoute()
    const { product } = useProduct(route.value.params.id)
    const item = computed(() => product.value?.attributes)

    return { item }
  },
})
</script>
