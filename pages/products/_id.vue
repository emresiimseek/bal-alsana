<template>
  <div v-if="item" class="container detail-page">
    <div class="detail-page__main">
      <div class="detail-page__main__img">
        <!--        <b-img :src="item.image" fluid alt="Responsive image"></b-img>-->
        <BaCarousel :items="item.images" />
      </div>
    </div>
    <div class="detail-page__right-side">
      <h2>{{ item.title }}</h2>
      <div class="detail-page__right-side__desc">{{ item.description }}</div>
      <div class="detail-page__right-side__price">
        {{ item.detail.attributes.price }} <span> TL </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'
import { useProduct } from '~/composables/useProduct'
import { productMapper } from '~/helper/mappers/ProductMapper'

export default defineComponent({
  components: {},
  setup() {
    const route = useRoute()
    const { product } = useProduct(route.value.params.id)

    const item = computed(() =>
      product.value ? productMapper(product.value) : null
    )

    return { item }
  },
})
</script>
<style lang="scss">
.detail-page {
  display: flex;

  &__right-side {
    flex: 2;
    margin: 0 3rem 0 3rem;
    color: $brown--2;

    &__desc {
      border-bottom: 1px solid #efefef;
      padding-bottom: 1rem;
    }

    :first-child {
      text-transform: uppercase;
    }

    &__price {
      font-weight: bolder;
      font-size: xx-large;
      color: $yellow--1;

      span {
        font-size: x-large;
      }
    }
  }

  &__main {
    flex: 3;

    &__img {
      background-color: rgb(255, 255, 255);
      overflow: hidden;
    }

    img {
      width: 100%;
      aspect-ratio: 4/3;

      &:hover {
        transition-duration: 0.5s;
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
}
</style>
