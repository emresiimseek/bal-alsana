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
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <div>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit"
                  >Search
                </b-button>
              </div>
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
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
import { useProducts } from '@/composables/useProducts'

export default defineComponent({
  name: 'BaNavBar',

  setup() {
    const { data } = useProducts()
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

    return { data, position }
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
</style>
