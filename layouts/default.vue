<template>
  <div class="main">
    <BaNavBar />
    <BaBreadcrumb />
    <nuxt class="body" />
    <client-only>
      <BaFooter />
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  min-height: 100vh;

  .body {
    padding-bottom: 15rem;
  }
}
</style>
