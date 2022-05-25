<template>
  <div :is="item.to ? 'nuxt-link' : 'div'" tag="div" :to="item.to" class="test">
    <b-card
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem; min-height: 10rem"
      class="mb-2 card-container"
    >
      <template #header>
        <BaCarousel :items="item.carouselItems" :interval="5000" />
      </template>
      <b-card-text>
        <div class="card-body-first-line">
          <div>{{ item.title }}</div>
          <span v-if="item.detail.attributes.price"
            >{{ item.detail.attributes.price }} TL</span
          >
        </div>
        <div>{{ item.description }}</div>
      </b-card-text>
      <div class="card-button">
        <b-button :to="item.to">Detay</b-button>
      </div>
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
.card-container {
  @include for-mobile {
    margin: auto;
  }
}

.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-body-first-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  div {
    font-weight: bolder;
    font-size: larger;
    color: $brown--2;
  }

  span {
    font-weight: bolder;
    font-size: larger;
    color: $yellow--1;
  }
}

.card {
  cursor: pointer;
  transition-duration: 0.5s;
  height: 31rem !important;

  .card-header {
    padding: 0;
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

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-button {
  .btn {
    float: right;
    font-size: small;
  }
}
</style>
