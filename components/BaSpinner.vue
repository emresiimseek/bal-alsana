<template>
  <div class="spinner-container">
    <img src="../assets/images/bee.png" alt="icon" />
    <div>Yükleniyor...</div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaSpinner',
  setup() {},
})
</script>

<style lang="scss" scoped>
.spinner-container {
  flex-direction: column;
  display: flex;
  justify-content: center;
  color: $brown--2;
  align-items: center;
  min-height: calc(100vh - 27.5rem);

  img {
    max-height: 3rem;
    max-width: 3rem;
    animation: rotation 1.5s infinite linear;
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
