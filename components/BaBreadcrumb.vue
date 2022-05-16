<template>
  <BBreadcrumb>
    <div class="container breadcrumb-container">
      <b-breadcrumb-item
        v-for="(item, i) in items"
        :key="item.text"
        :href="item.href"
        :active="i === items.length - 1"
        >{{ item.text }}
      </b-breadcrumb-item>
    </div>
  </BBreadcrumb>
</template>

<script>
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaBreadcrumb',
  setup() {
    const { route } = useContext()
    const items = ref([{ text: 'Anasayfa', href: '/' }])

    const routes = route.value.matched

    routes.forEach((r) => {
      items.value.push({ text: r.meta.navName, href: r.path })
    })

    return { items, routes, value: route.value.query }
  },
})
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  display: flex;
}

.breadcrumb {
  border-radius: 0;
  margin: 0;
  font-size: small;
  background-color: $yellow--3;
  border-bottom: 1px solid #efefef;
  height: var(--desktop-breadcrumb-height);

  .breadcrumb-item a {
    color: black;
  }
}
</style>
