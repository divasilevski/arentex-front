<template lang="pug">
  .page.catalog.container
    h1 Каталог
    .catalog__main
      .catalog__space
      .catalog__header
        CatalogSort
        CatalogTags
      CatalogFilter
      .catalog__grid
        CatalogGrid(:cards="products")
        UIButton(block) Показать ещё

</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { api } from '~/assets/scripts/api'

export default defineComponent({
  async asyncData({ $axios }) {
    const products = await api.getProducts($axios)
    return { products }
  },
})
</script>


<style lang="scss" scoped>
.catalog {
  .catalog__main {
    display: grid;
    margin-top: 30px;
    grid-template-columns: 250px 1fr;
    grid-column-gap: 40px;

    @include mw(950px) {
      grid-template-columns: 1fr;
    }
  }

  .catalog-filter {
    @include mw(950px) {
      order: -1;
    }
  }

  .catalog__grid {
    .button {
      margin-top: 30px;
    }
  }
}
</style>