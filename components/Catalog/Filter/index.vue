<template lang="pug">
  .catalog-filter(:class="{ open: filters }")
    .catalog-filter__header
      .catalog-filter__filter(@click="filters = !filters") Фильтры
        .filter-icon
          img(src="~/assets/icons/filter.svg" alt="FilterIcon")

      .catalog-filter__filter.catalog-filter__filter--category(@click="openCategory")
        span Все категории
        .filter-icon
          img(src="~/assets/icons/category.svg" alt="CategoryIcon")

    .catalog-filter__items
      .catalog-filter__item
        .catalog-filter__title Категория
        CategoryList(:categories="categories.slice(0, 6)")

        .catalog-filter__category-more(@click="openCategory") Все категории
          .icon
            img(src="~/assets/icons/category.svg" alt="CategoryIcon")

      .catalog-filter__item
        .catalog-filter__title Цена за день
        CatalogFilterPrice(
          :min="minprice"
          :max="maxprice"
          @priceChanged="queryPrice")
</template>

<script>
import { defineComponent, useStore, ref } from '@nuxtjs/composition-api'
import { useCatalog } from '~/composables/catalog'

export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    minprice: {
      type: Number,
      default: 0,
    },
    maxprice: {
      type: Number,
      default: 1000,
    },
  },
  setup() {
    const store = useStore()
    const { queryPrice } = useCatalog()

    // -= Methods =-
    const openCategory = () => store.commit('toggleOverlay', 'category')

    return {
      filters: ref(false),

      queryPrice,
      openCategory,
    }
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

    .catalog-filter__header .catalog-filter__filter .filter-icon {
      transform: rotate(0deg);
    }
  }

  .catalog-filter__header {
    display: none;

    @include mw(950px) {
      display: flex;
      gap: 30px;
    }

    .catalog-filter__filter {
      display: flex;
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

    .catalog-filter__filter--category {
      @include mw(450px) {
        width: auto;

        span {
          display: none;
        }
      }

      .filter-icon {
        transform: rotate(0deg);
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
      padding-bottom: 30px;

      .catalog-filter__title {
        position: relative;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 15px;
      }

      .catalog-filter__category-more {
        display: flex;
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
        margin-top: 20px;

        @include mw(950px) {
          display: none;
          margin-top: 0px;
        }

        &:hover {
          background-color: var(--light-selected);
        }

        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s;
          width: 16px;
          height: 16px;

          img {
            width: 17px;
            height: 17px;
          }
        }
      }
    }
  }
}
</style>