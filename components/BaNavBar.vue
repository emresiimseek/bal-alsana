<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      :fixed="position"
      class="navbar-custom"
    >
      <div class="container">
        <b-navbar-brand href="/">
          <img src="../assets/images/icon.png" alt="icon" />
          <span> Bal Alsana </span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="custom-nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/products">Ürünler</b-nav-item>
            <b-nav-item href="/blogs">Blog</b-nav-item>
            <b-nav-item href="/about-us">Hakkımızda</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaNavBar',

  setup() {
    const position = ref('')

    const onScroll = () => {
      window.pageYOffset > 20 ? (position.value = 'top') : (position.value = '')
    }

    onMounted(() => {
      window.addEventListener('scroll', onScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
    })

    return { position }
  },
})
</script>

<style lang="scss" scoped>
.navbar-brand {
  display: flex;
  align-items: center;

  img {
    max-height: 3rem;
    max-width: 3rem;
  }
}

.navbar-custom .navbar-brand {
  color: $yellow--1;
}

a.nav-link {
  color: $yellow--2 !important;
}

.navbar {
  background-color: $brown--1;
  @include for-desktop {
    height: var(--desktop-nav-height);
  }
}

.search-area {
  @include for-mobile {
    display: flex;
    align-items: center;
    input {
      flex: 1;
    }
  }
}
</style>
