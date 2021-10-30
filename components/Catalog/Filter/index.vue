<template lang="pug">
  .catalog-filter(:class="{ open: filters }")
    .catalog-filter__header(@click="filters = !filters") Фильтры
      .filter-icon
        img(src="~/assets/icons/filter.svg" alt="FilterIcon")

    .catalog-filter__items
      .catalog-filter__item
        .catalog-filter__title Категория
        CatalogFilterCategory(
          v-for="category in categories"
          :key="'category-' + category.id"
          :selected="selectedCategory"
          :category="category"
          @change="filters = !filters")

      .catalog-filter__item
        .catalog-filter__title Цена за день
        CatalogFilterPrice(@priceChanged="priceChangedHandler")
</template>

<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import { useQuery } from '~/composables/query'

export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { query, changeQuery } = useQuery()

    // -= Computed =-
    const selectedCategory = computed(() => {
      const category = +query.value.category
      const subcategory = +query.value.subcategory

      if (category) return { category }
      if (subcategory) {
        // TO DO: find subcategory
        return { category, subcategory }
      }
    })

    // -= Methods =-
    const priceChangedHandler = (event) => {
      changeQuery([], { minprice: event[0], maxprice: event[1] })
    }

    return { selectedCategory, filters: ref(false), priceChangedHandler }
  },
})
</script>


<style lang="scss" scoped>
.catalog-filter {
  width: 100%;

  &.open {
    .catalog-filter__items {
      display: block;
    }

    .catalog-filter__header .filter-icon {
      transform: rotate(0deg);
    }
  }

  .catalog-filter__header {
    display: none;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 15px;
    font-size: 16px;
    line-height: 16px;
    background-color: var(--light-gray);
    border-radius: 38px;
    height: 38px;
    cursor: pointer;
    user-select: none;
    font-weight: 500;
    margin-bottom: 20px;

    @include mw(950px) {
      display: flex;
    }

    &:hover {
      background-color: var(--light-selected);
    }

    .filter-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      transform: rotate(-180deg);
      width: 16px;
      height: 16px;

      img {
        width: 17px;
        height: 17px;
      }
    }
  }

  .catalog-filter__items {
    @include mw(950px) {
      display: none;
      margin-top: 0;
      padding: 0 15px 5px;
    }

    .catalog-filter__item {
      padding-bottom: 20px;

      .catalog-filter__title {
        position: relative;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 15px;
      }
    }
  }
}
</style>