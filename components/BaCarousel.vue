<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Slides with image only -->
      <b-carousel-slide
        v-for="img in items"
        :key="img"
        :img-src="img"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaCarousel',
  props: {
    items: {
      required: true,
      type: Array,
      default: () => [],
    },
  },
  setup() {},
})
</script>

<style scoped></style>
