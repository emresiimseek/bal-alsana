<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <slot></slot>
      <template #prevArrow> <BIconArrowLeft scale="1" /> </template>
      <template #nextArrow>
        <BIconArrowRight scale="1" />
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { BIconArrowRight, BIconArrowLeft } from 'bootstrap-vue'

export default defineComponent({
  name: 'BaVueSlickCarousel',
  components: { BIconArrowRight, BIconArrowLeft },
  setup() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      centerMode: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: true,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            arrows: true,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1281,
          settings: {
            arrows: true,
            slidesToShow: 3,
          },
        },
      ],
    }

    return { settings }
  },
})
</script>

<style>
.slick-arrow {
  display: flex;
  width: 4rem;
  height: 3rem;
  top: 50%;
  --tw-translate-y: -50%;
  position: absolute;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  background: rgba(229, 229, 229, 0.7);
}
.slick-prev {
  @apply cursor-pointer p-2  left-0 z-10;
  cursor: pointer;
  padding: 0.5rem; /* 8px */
  left: 0;
  z-index: 10;
}
.slick-next {
  cursor: pointer;
  padding: 0.5rem; /* 8px */
  right: 0;
  z-index: 10;
}
</style>
