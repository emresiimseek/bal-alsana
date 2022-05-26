<template>
  <div>
    <DetailPage v-if="item">
      <BaCarousel :items="item.carouselItems" />
      <template #right>
        <div class="right-side">
          <h2>{{ item.title }}</h2>
          <div class="right-side__desc">
            {{ item.description }}
          </div>
          <div class="right-side__price">
            {{ item.detail.attributes.price }} <span> TL </span>
          </div>
        </div>
      </template>
    </DetailPage>

    <BaSpinner v-else />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  Ref,
  ref,
  useRoute,
  watchEffect,
} from '@nuxtjs/composition-api'
import { useProduct } from '~/composables/useProduct'
import { productMapper } from '~/helper/mappers/ProductMapper'
import { CardItem } from '~/types/CardItem'
import DetailPage from '~/components/DetailPage.vue'

export default defineComponent({
  components: { DetailPage },
  setup() {
    const route = useRoute()
    const { product } = useProduct(route.value.params.id)
    const item: Ref<CardItem | null> = ref(null)

    const mapProduct = () => {
      if (product.value) item.value = productMapper(product.value)
    }

    watchEffect(() => product.value && mapProduct())

    return { item }
  },
})
</script>
<style lang="scss">
.right-side {
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
    @include for-mobile {
      float: right;
    }

    span {
      font-size: x-large;
    }
  }
}
</style>
