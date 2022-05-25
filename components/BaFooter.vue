<template>
  <div v-if="footer" class="container-footer">
    <div class="container-footer__main">
      <div class="container-footer__main__contact-info">
        <div class="icon-container">
          <BIconPinMap scale="1.5" />
          <span>{{ footer.attributes.address }}</span>
        </div>
        <div class="icon-container">
          <BIconTelephone scale="1.5" />
          <span>{{ footer.attributes.phone }}</span>
        </div>
        <div class="icon-container">
          <BIconEnvelope scale="1.5" />
          <span>{{ footer.attributes.email }}</span>
        </div>
      </div>

      <div class="container-footer__main__logo">
        <img src="../assets/images/icon.png" alt="icon" />
        <h5>Bal Alsana © 2022</h5>
      </div>
      <div class="container-footer__main__about">
        <div class="container-footer__main__about__title">
          About the company
        </div>
        <div>
          {{ footer.attributes.aboutText }}
        </div>
        <div class="container-footer__main__about__socials">
          <a v-for="item in items" :key="item.text" :href="item.url">
            <BIcon :icon="item.text" scale="1.5"></BIcon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import {
  BIconPinMap,
  BIconTelephone,
  BIconEnvelope,
  BIconInstagram,
  BIconFacebook,
  BIconTwitter,
  BIcon,
  BIconArrowUp,
} from 'bootstrap-vue'
import { useFooter } from '~/composables/useFooter'

export default defineComponent({
  name: 'BaFooter',
  components: {
    BIconPinMap,
    BIconEnvelope,
    BIconTelephone,
    BIcon,
    BIconInstagram,
    BIconFacebook,
    BIconTwitter,
    BIconArrowUp,
  },
  setup() {
    const { footer } = useFooter()
    const items = computed(() =>
      footer.value?.attributes.socials.data.map((s) => s.attributes)
    )

    return { footer, items }
  },
})
</script>

<style lang="scss" scoped>
a {
  color: $yellow--2;
}

.container-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: $brown--1;
  color: $yellow--2;
  min-height: 20rem;

  &__main {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 3rem 0 3rem;
    align-items: center;

    @include for-mobile {
      padding-top: 1rem;
      gap: 1rem;
      grid-auto-flow: row;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      &__logo {
        order: -1;
      }
      &__contact-info {
        padding-top: 1rem;
        border-top: 1px solid;
        padding-bottom: 1rem;
        border-bottom: 1px solid;
      }
    }

    &__contact-info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 1rem;
      flex: 1;
    }

    &__about {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      &__socials {
        display: flex;
        justify-content: start;
        @include for-mobile {
          justify-content: center;
        }
        gap: 3rem;
        padding: 1rem 0 1rem 0;

        .b-icon {
          cursor: pointer;

          &:hover {
            color: $yellow--1;
          }
        }
      }

      &__title {
        font-weight: bolder;
        font-size: larger;
        color: $yellow--1;
      }
    }

    &__logo {
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
}

.icon-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

img {
  max-height: 5rem;
  max-width: 5rem;
}
</style>
