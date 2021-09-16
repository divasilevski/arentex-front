<template lang="pug">
  .catalog-filter
    .catalog-filter__item
      .catalog-filter__title Категория
      CatalogFilterCategory(
        v-for="category in categories"
        :key="'category-' + category.id"
        :category="category")

    .catalog-filter__item
      .catalog-filter__title Цена
      CatalogFilterPrice
</template>

<script>
import { defineComponent } from '@vue/composition-api'

const CATEGORIES = [
  {
    id: 1,
    title: 'Название категории',
    subs: [
      { id: 1, title: 'Название подкатегории' },
      { id: 2, title: 'Название подкатегории' },
      { id: 3, title: 'Название подкатегории' },
    ],
  },
  {
    id: 2,
    title: 'Название категории',
  },
  {
    id: 3,
    title: 'Название категории',
    subs: [{ id: 4, title: 'Название подкатегории' }],
  },
]

export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => CATEGORIES,
    },
  },
  setup() {
    return {
      value: false,
    }
  },
})
</script>


<style lang="scss" scoped>
.catalog-filter {
  width: 100%;
  max-width: 250px;
  .catalog-filter__item {
    padding-bottom: 20px;

    .catalog-filter__title {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 16px;
      padding-bottom: 10px;
    }
  }
}
</style>