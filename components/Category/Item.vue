<template lang="pug">
  .category-item
    .category__item
      span(
        v-text="category.name"
        :data-category="category.id"
        @click="onClickCategory(category.id)")

      .category__more(v-if="category.subcategories" @click="panel = !panel")
        img.small-icon(
          :class="{ open: panel }"
          src="~/assets/icons/arrow.svg"
          alt="OpenSubcategoryIcon")

    .category__panel(v-if="category.subcategories" v-collapse:200="panel")
      span.subcategory(
        v-for="subcategory in category.subcategories"
        v-text="subcategory.name"
        :key="'subcategory-' + subcategory.id"
        :data-subcategory="subcategory.id"
        @click="onClickSubcategory(subcategory.id)")

</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useCatalog } from '~/composables/catalog'

export default defineComponent({
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  setup(_, { emit }) {
    const { queryCategory, querySubcategory } = useCatalog()
    const panel = ref(false)

    // -= Methods =-
    const onClickCategory = (id) => {
      queryCategory(id)
      emit('change')
    }
    const onClickSubcategory = (id) => {
      querySubcategory(id)
      emit('change')
    }

    return { panel, onClickCategory, onClickSubcategory }
  },
})
</script>


<style lang="scss" scoped>
.category-item {
  position: relative;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  span:hover {
    cursor: pointer;
    color: var(--accent);
  }

  .category__item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 16px;

    span {
      display: flex;
      align-items: center;
      padding-top: 4px;
    }

    .selected {
      color: var(--accent);
    }
  }

  .category__more {
    position: relative;
    cursor: pointer;
    margin-top: 6px;

    .small-icon {
      width: 16px;
      height: 16px;
      transition: transform 0.2s;
      transform: rotate(-90deg);
      user-select: none;

      &.open {
        transform: rotate(0deg);
      }
    }

    .badge {
      position: absolute;
      right: -5px;
      top: -3px;
      width: 6px;
      height: 6px;
      border-radius: 6px;
      background: var(--accent);
    }

    &:hover {
      &:before {
        z-index: -1;
        position: absolute;
        content: ' ';
        width: 26px;
        height: 26px;
        border-radius: 26px;
        background: var(--light-gray);
        top: -4px;
        left: -5px;
      }
    }
  }

  .category__panel {
    display: block;
    padding-left: 15px;
    height: 0px;
    overflow: hidden;

    .subcategory {
      display: flex;
      align-items: center;
      font-size: 16px;
      width: fit-content;
      margin-top: 6px;
      font-size: 15px;

      &:hover {
        cursor: pointer;
        color: var(--accent);
      }

      &.selected {
        color: var(--accent);
      }
    }
  }
}
</style>