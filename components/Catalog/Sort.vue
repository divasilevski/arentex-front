<template lang="pug">
  .catalog-sort
    .catalog-sort__items
      .sort-item(
        v-for="(sort, index) in sorts"
        v-html="sort.title"
        :key="'sort-' + index"
        :class="{ active: selected.id === sort.id }"
        @click="changeQuery([], { sort: sort.id })")

    .catalog-sort__select
      UISelect(
        :options="sorts"
        :selected="selected"
        @change="changeQuery([], { sort: $event.id })")

</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useQuery } from '~/composables/query'

const SORTS = [
  { id: 'popular', title: 'Популярные' },
  { id: 'new', title: 'Новинки' },
  { id: 'cheap', title: 'Сначала дешёвые' },
  { id: 'expensive', title: 'Сначала дорогие' },
]

export default defineComponent({
  setup() {
    const { query, changeQuery } = useQuery()

    // -= Computed =-
    const selected = computed(() => {
      const id = query.value.sort
      return SORTS.find((sort) => sort.id === id) || SORTS[0]
    })

    return { selected, changeQuery, sorts: SORTS }
  },
})
</script>

<style lang="scss" scoped>
.catalog-sort {
  width: 100%;
  margin-bottom: 20px;

  .catalog-sort__items {
    display: flex;
    align-items: center;
    justify-content: center;

    @include mw(950px) {
      display: none;
    }

    .sort-item {
      position: relative;
      color: var(--gray);
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      cursor: pointer;

      &.active {
        color: var(--main);
      }

      &:hover {
        transition: 0.3s;
        color: var(--accent);
      }

      &:not(:last-child) {
        margin-right: 30px;
        &::before {
          content: '';
          position: absolute;
          pointer-events: none;
          right: -18px;
          top: 7px;
          height: 6px;
          width: 6px;
          border-radius: 6px;
          background: var(--light-gray);
        }
      }
    }
  }

  .catalog-sort__select {
    display: none;

    @include mw(950px) {
      display: block;
    }
  }
}
</style>
