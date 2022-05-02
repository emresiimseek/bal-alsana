<template>
  <div>
    <BaNavBar />
    <BaBreadcrumb />

    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>
<style scoped></style>
