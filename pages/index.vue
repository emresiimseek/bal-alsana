<template>
  <div class="home-container">
    <BaCarousel :items="urls" />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita nemo odio
    quod vitae. A aliquid autem cum cupiditate, error esse eveniet ipsam nostrum
    nulla quibusdam, sed vitae voluptas voluptatum. Autem, cupiditate dicta
    dolor dolorem ducimus eveniet expedita ipsam iure minima nobis officia
    officiis omnis perspiciatis quasi quidem reprehenderit rerum sed soluta
    tempora temporibus. Alias aspernatur assumenda at atque autem commodi
    consectetur cumque debitis deserunt dignissimos distinctio dolorem
    doloremque eaque earum enim ipsa iure labore laborum libero magni molestiae
    mollitia nam neque nisi non pariatur perferendis placeat, possimus
    praesentium ratione sint sit sunt suscipit tempora unde velit voluptates?
    Accusamus alias cum cumque deleniti enim facilis hic illum iste minima
    molestiae natus nesciunt non nulla sapiente, ullam ut vero! Animi blanditiis
    fugit non obcaecati praesentium similique velit veritatis! Accusantium
    beatae delectus deserunt, dolore dolorem eius est in ipsa maxime neque
    praesentium quo similique, tempora tempore totam voluptate voluptatibus!
    Asperiores at atque beatae consequuntur deleniti dolor dolores, eaque
    eligendi esse est nam natus, nostrum numquam praesentium quidem, quo
    sapiente similique unde ut voluptatem! Ipsam nulla provident quaerat ratione
    tempore. Cumque debitis dolores eum, inventore ipsa iste nam nostrum
    obcaecati sint sit. Adipisci aspernatur debitis dolores doloribus expedita
    illo laudantium minima neque, non quae quos repudiandae voluptatum. Aliquid
    laboriosam libero praesentium qui quidem. Assumenda autem consectetur cum
    delectus dolor et vero? Fuga, illo ipsum natus necessitatibus nisi porro
    quaerat quia voluptate! Corporis dolor enim modi rerum? Asperiores
    blanditiis debitis delectus dicta dolorem earum, eos in magni molestiae
    sapiente, ut, voluptates! Aspernatur delectus ea fugit laborum officiis
    repudiandae ullam? Animi, cumque distinctio dolorem ea error ipsa ipsam iste
    nam nostrum obcaecati quasi, quidem reiciendis. Adipisci, aperiam at
    consequatur dignissimos eligendi ex expedita explicabo incidunt ipsum iste
    iusto laborum non obcaecati quam quos repellendus tempore voluptate! Ad
    aliquam architecto assumenda culpa debitis deserunt doloremque ducimus,
    eaque earum eos error et fugiat laboriosam magni nemo nihil nisi odit omnis
    placeat quo ratione reiciendis repellat repellendus reprehenderit rerum sed
    sequi soluta vel voluptates voluptatibus! Aut cumque, distinctio dolorum
    eius incidunt molestias mollitia nemo omnis quam quidem tempora velit vero
    voluptatum. Aperiam asperiores assumenda beatae blanditiis culpa distinctio
    et eveniet explicabo facilis in labore magni, necessitatibus nihil provident
    quae quibusdam quisquam quos reiciendis repellat repellendus saepe sequi
    sunt tempora temporibus unde ut voluptatem voluptatum. Alias asperiores
    dolore illo laborum nihil repellendus, voluptatum. Esse eveniet id impedit
    odio quod, repellat tempore. A, ad aspernatur atque beatae culpa eligendi
    illum in iste iusto laboriosam libero nobis nulla quis quisquam rerum
    suscipit tempore totam ullam! Aliquid consectetur est ex ipsa nostrum vero.
    Consequuntur deserunt itaque laudantium minima nisi, nulla perspiciatis
    praesentium quaerat quidem saepe! Ab ad amet atque corporis doloribus esse
    explicabo facere minima modi nam necessitatibus nobis non nulla obcaecati
    odio officiis, possimus quae, repellat reprehenderit, similique sunt
    suscipit totam voluptatum! Eum iste maxime provident? A ab beatae
    dignissimos distinctio dolor dolore dolores, eligendi est et excepturi in
    iusto molestias nemo nesciunt nihil odio officia officiis possimus
    repellendus sed sequi similique velit. Corporis eius iure iusto numquam
    obcaecati voluptates! Quam, rem?
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
.home-container {
  overflow: hidden;
}

.carousel-item {
  //top: calc(var(--desktop-nav-height) + var(--desktop-breadcrumb-height));
}
</style>
