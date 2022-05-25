<template>
  <div>
    <div v-if="aboutMe" class="container container-about-me">
      <div id="editor" v-html="$md.render(aboutMe.attributes.content)"></div>
    </div>
    <BaSpinner v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useAboutUs } from '~/composables/useAboutUs'

export default defineComponent({
  name: 'AboutUs',
  setup() {
    const { aboutMe } = useAboutUs()

    return { aboutMe }
  },
})
</script>

<style lang="scss" scoped>
.container-about-me {
  margin-top: 1rem;

  #editor ::v-deep p {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
