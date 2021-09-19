<template lang="pug">
  .catalog-sort
    .catalog-sort__items
      nuxt-link.sort-item(
        v-for="(sort, index) in sorts"
        :key="'sort-' + index"
        :to="`?sort=${sort.id}`"
        @click.native="selected = sort"
        :class="{active: selected.id === sort.id}") {{ sort.title }}

    .catalog-sort__select
      UISelect(:options="sorts" :selected="selected" @change="selected = $event")
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    return {
      sorts: [
        { id: 'popular', title: 'Популярные' },
        { id: 'new', title: 'Новинки' },
        { id: 'cheap', title: 'Сначала дешёвые' },
        { id: 'expensive', title: 'Сначала дорогие' },
      ],
      selected: ref({ id: 'popular', title: 'Популярные' }),
    }
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
