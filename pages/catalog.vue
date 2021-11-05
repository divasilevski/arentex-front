<template lang="pug">
  .page.catalog.container(ref="pageRef")
    h1 Каталог
    .catalog__main
      .catalog__space
      .catalog__header
        CatalogSort
        CatalogTags(:categories="categories")
      CatalogFilter(
        :categories="categories"
        :minprice="Math.floor((products || ssrProducts).min_price)"
        :maxprice="Math.floor((products || ssrProducts).max_price)")
      .catalog__grid
        CatalogGrid(:cards="(products || ssrProducts).items")
        UIPagination(
          :total="(products || ssrProducts).total"
          :skip="(products || ssrProducts).skip"
          :limit="(products || ssrProducts).limit"
          @change="changePageHandler")

</template>

<script>
import {
  defineComponent,
  useContext,
  watch,
  ref,
} from '@nuxtjs/composition-api'
import { api, asyncRequest } from '~/assets/scripts/api'
import { useQuery } from '~/composables/query'

const LIMIT = 12
const ACCESS_QUERY = [
  'page',
  'category',
  'subcategory',
  'search',
  'maxprice',
  'minprice',
]

const normalizeQuery = (query) => {
  const queries = { ...query }
  for (const field in queries) {
    if (ACCESS_QUERY.includes(field)) {
      switch (field) {
        case 'page':
          queries.skip = (queries.page - 1) * LIMIT
          delete queries[field]
          break
        case 'minprice':
          queries.min_price = queries[field]
          delete queries[field]
          break
        case 'maxprice':
          queries.max_price = queries[field]
          delete queries[field]
          break

        default:
          break
      }
    } else {
      delete queries[field]
    }
  }
  return { ...queries, limit: LIMIT }
}

export default defineComponent({
  async asyncData(ctx) {
    const queries = normalizeQuery(ctx.query)
    const requests = [(ax) => api.getProducts(ax, queries), api.getCategories]
    const [ssrProducts, categories] = await asyncRequest(ctx, requests)
    return { ssrProducts, categories }
  },
  setup() {
    const pageRef = ref()
    const products = ref(null)
    const context = useContext()
    const { query, changeQuery } = useQuery()

    // -= Watch =-
    watch(query, async () => {
      const queries = normalizeQuery(query.value)
      products.value = await asyncRequest(context, api.getProducts, queries)
      scrollToTop()
    })

    // -= Methods =-
    const changePageHandler = (page) => {
      changeQuery([], { page })
    }

    const scrollToTop = () => {
      if (window && pageRef.value) {
        const top = pageRef.value.offsetTop
        if (window.scrollY > top) {
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
    }

    return { pageRef, products, changePageHandler }
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
    .pagination {
      margin-top: 30px;
    }
  }
}
</style>