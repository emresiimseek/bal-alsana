<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      :fixed="position"
      class="navbar-custom"
    >
      <div class="container">
        <b-navbar-brand href="/" :active="$route.path === '/'">
          <img src="../assets/images/icon.png" alt="icon" />
          <span> Bal Alsana </span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="custom-nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :active="$route.name == 'products'" href="/products"
              >Ürünler</b-nav-item
            >
            <b-nav-item :active="$route.name == 'blogs'" href="/blogs"
              >Blog</b-nav-item
            >
            <b-nav-item :active="$route.name == 'about-us'" href="/about-us"
              >Hakkımızda</b-nav-item
            >
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
    max-height: 3.5rem;
    max-width: 3.5rem;
  }
}

.navbar-custom .navbar-brand {
  color: $yellow--1;
  margin-right: 2rem;
  @include for-desktop {
    margin-right: 4rem;
  }
}

.navbar-custom .navbar-brand.active {
  color: $yellow--4 !important;
}

a.nav-link {
  padding-bottom: 0;
  margin-bottom: 0.5rem;
  color: $yellow--1 !important;

  @include for-desktop {
    margin-right: 2rem;
  }
}
a.nav-link.active {
  color: $yellow--4 !important;
  font-weight: bold;

  @include for-desktop {
    border-bottom: 2px solid $yellow--4 !important;
  }
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
