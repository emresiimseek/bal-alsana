<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="interval"
      :controls="hasControl"
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Slides with image only -->
      <b-carousel-slide
        v-for="item in items"
        :key="item.title"
        :img-src="item.img"
        :caption="item.title"
        :text="item.description"
      >
        <div v-if="hasIconDown" class="icon-container">
          <BIconArrowDown animation="cylon-vertical" font-scale="1.8" />
          <BIconCircle font-scale="3.5" />
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { BIconArrowDown, BIconCircle } from 'bootstrap-vue'
import { CarouselItem } from '~/types/CarouselItem'

export default defineComponent({
  name: 'BaCarousel',
  components: { BIconArrowDown, BIconCircle },
  props: {
    items: {
      required: true,
      type: Array as PropType<CarouselItem[]>,
      default: () => [],
    },
    hasControl: Boolean,
    hasIconDown: Boolean,
    interval: { type: Number, default: () => 4000 },
  },
  setup() {},
})
</script>

<style lang="scss" scoped>
.icon-container {
  position: relative;
  text-align: center;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;

  svg {
    position: absolute;
  }
}
</style>
