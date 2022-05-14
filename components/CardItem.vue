<template>
  <div :is="item.to ? 'nuxt-link' : 'div'" tag="div" :to="item.to">
    <b-card
      :title="item.title"
      :img-src="item.coverImage"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ item.description }}
      </b-card-text>
      <b-button href="#">Detay</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { CardItem } from '~/types/CardItem'

export default defineComponent({
  name: 'CardItem',
  props: { item: { type: Object as PropType<CardItem>, required: true } },
  setup() {},
})
</script>

<style lang="scss" scoped>
.card-text {
  white-space: nowrap;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card {
  cursor: pointer;
  transition-duration: 0.5s;

  @include for-desktop {
    margin-right: 2rem;
  }

  img {
    width: 100%;
    aspect-ratio: 4/3;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;

    img {
      transition-duration: 0.5s;
      transform: scale(1.05);
    }
  }
}
</style>
