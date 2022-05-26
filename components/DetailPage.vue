<template>
  <div class="detail-page container">
    <div class="detail-page__main">
      <slot> </slot>
    </div>
    <div class="detail-page__right"><slot name="right"> </slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.detail-page {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 2rem;
  @include for-mobile {
    flex-direction: column;
  }

  &__main {
    flex: 1;
  }
  &__right {
    flex: 1;
  }
}
</style>
