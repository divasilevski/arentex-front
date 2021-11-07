<template lang="pug">
  .category-list(ref="listRef")
    CategoryItem(
      v-for="category in categories"
      :key="'category-item-' + category.id"
      :category="category"
      @change="change")

</template>

<script>
import { defineComponent, watch, ref } from '@nuxtjs/composition-api'
import { useQuery } from '~/composables/query'

function select(field, value, root) {
  if (value && root) {
    const $el = root.querySelector(`[data-${field}="${value}"]`)
    $el && $el.classList.add('selected')
  }
}

function unselect(field, value, root) {
  if (value && root) {
    const $el = root.querySelector(`[data-${field}="${value}"]`)
    $el && $el.classList.remove('selected')
  }
}

function selection(value, oldValue) {
  const [query, root] = value
  const [oldQuery, oldRoot] = oldValue

  if (!oldRoot && query.category) {
    select('category', query.category, root)
  } else if (query.category !== oldQuery.category) {
    unselect('category', oldQuery.category, root)
    select('category', query.category, root)
  }

  if (!oldRoot && query.subcategory) {
    select('subcategory', query.subcategory, root)
  } else if (query.subcategory !== oldQuery.subcategory) {
    unselect('subcategory', oldQuery.subcategory, root)
    select('subcategory', query.subcategory, root)
  }
}

export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  setup(_, { emit }) {
    const { query } = useQuery()
    const listRef = ref()

    // -= Watch =-
    watch([query, listRef], selection)

    return {
      listRef,
      // -= Emits =-
      change: () => emit('change'),
    }
  },
})
</script>

<style lang="scss" scoped>
.category-list {
  height: 100%;
}
</style>