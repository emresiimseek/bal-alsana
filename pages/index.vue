<template>
  <div class="home-container">
    <BaCarousel :items="urls" class="home-carousel" />
    <div class="test">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
      reiciendis, temporibus. A ad adipisci amet architecto asperiores
      assumenda, at blanditiis corporis deleniti enim eum, excepturi incidunt
      ipsam ipsum laboriosam libero mollitia nobis officia perferendis quaerat
      qui reiciendis repudiandae similique temporibus vel vitae voluptas.
      Architecto, aut, doloribus? Accusamus delectus maxime quae repellendus
      veniam vero. Animi ea earum fugit id illum ipsam iusto laboriosam magni
      minima modi molestias nihil odio odit, omnis, optio possimus quis ratione
      repudiandae? Aperiam dolor eveniet illo maiores nobis pariatur rem?
      Adipisci, aspernatur atque blanditiis dicta earum facere itaque magni
      minus officia omnis perspiciatis possimus quidem sint temporibus tenetur
      ut vitae. Amet consequatur dicta fugit illo libero nisi temporibus?
      Accusantium consequatur eos eveniet exercitationem fuga fugit illum labore
      magnam minus numquam odio officia optio placeat quisquam ratione
      repellendus repudiandae totam veritatis, vero voluptatibus. Consequatur
      dicta fugiat, incidunt iste labore placeat provident? Alias animi,
      asperiores delectus dolorem facere fugiat illum impedit ipsa itaque, modi
      nobis quod ratione repellendus? Amet asperiores cupiditate, exercitationem
      fugit harum id iure laborum magnam molestiae nobis quaerat similique
      soluta ullam. Accusantium beatae consectetur consequuntur debitis dolor
      ducimus eaque est, et excepturi, fuga impedit incidunt iure maxime, minus
      mollitia nihil nobis perferendis quidem quis quisquam quo ratione sed sint
      unde vero! Architecto assumenda blanditiis consectetur cupiditate
      dignissimos dolorum ea eaque eligendi fugit harum illo illum ipsum iure
      iusto laudantium maiores maxime modi necessitatibus nostrum nulla odio
      odit officia officiis placeat quaerat, qui quia quidem quis quos ratione
      repellat repellendus sapiente sint tenetur velit veniam veritatis. Autem
      culpa delectus eaque nemo repellat similique vel vero! Debitis delectus
      molestiae nisi optio quas. Cupiditate deleniti dolore dolores dolorum eius
      error esse illum nesciunt odio praesentium quaerat, quas quod reiciendis
      reprehenderit sit suscipit voluptatem. A ad aperiam consectetur delectus
      dignissimos doloribus explicabo, facere id laudantium modi necessitatibus
      non perspiciatis qui quis quisquam recusandae repellat voluptatum. Autem
      dignissimos dolor doloribus eius eligendi esse facere fuga fugit inventore
      ipsum labore laboriosam magnam magni, necessitatibus nulla obcaecati odio
      omnis perspiciatis quae, quasi quibusdam, quisquam quo sapiente sit
      tempora voluptate voluptatem! Accusantium architecto consequatur debitis
      doloribus ducimus eius eligendi eos, eum expedita harum hic molestiae
      mollitia neque nihil qui quidem quo? Accusantium cumque dignissimos
      explicabo fugiat labore, laboriosam laborum magni maiores molestias
      officiis omnis, sit sunt suscipit tempora tenetur ullam vitae? Doloremque
      nemo, nihil perspiciatis quisquam temporibus voluptatum? Dolor eveniet
      exercitationem expedita magnam molestiae molestias nemo quos repudiandae,
      saepe velit. Accusantium adipisci aspernatur beatae debitis deserunt
      dolores doloribus, dolorum enim error ex exercitationem fuga illo incidunt
      inventore ipsum iste, magnam minus molestiae mollitia nulla officia optio
      perferendis perspiciatis porro provident qui quibusdam quidem quos ratione
      reiciendis rem reprehenderit repudiandae sed sit tempore temporibus vero?
      Dolore, doloremque earum fuga iusto molestiae neque quod sunt temporibus
      velit voluptates. Ab aliquid asperiores cupiditate delectus distinctio
      dolorum, eaque error fugiat hic illum iste modi nihil numquam porro,
      quibusdam quis quisquam reiciendis reprehenderit repudiandae tempora
      tenetur vel velit vero. Delectus ducimus error esse fugit incidunt minus
      praesentium quae quis totam vel. Alias autem fugiat illum necessitatibus
      nihil repellendus unde.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watchEffect } from '@nuxtjs/composition-api'
import { useHomePageBackground } from '~/composables/useHomePageBackground'
import { mapImagesToUrls } from '~/helper/mappers/HomePageCarouselMapper'

export default defineComponent({
  components: {},
  setup() {
    const { response } = useHomePageBackground()
    const urls: Ref<String[]> = ref([])

    const mapUrl = () => {
      if (!response.value?.attributes.image) return
      urls.value = mapImagesToUrls(response.value?.attributes.image)
    }
    watchEffect(() => mapUrl())

    return { urls }
  },
})
</script>
<style lang="scss">
.home-carousel {
  height: calc(100vh - var(--total-header-height));

  .carousel-item {
    height: calc(100vh - var(--total-header-height));

    img {
      height: calc(100vh - var(--total-header-height));
    }
  }
}
</style>
