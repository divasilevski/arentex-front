<template lang="pug">
  .category
    .category__item
      span(
        v-text="category.name"
        :class="{ 'selected': selected.category === category.id }"
        @click="changeQuery(['subcategory'], { category: category.id })")

      .category__more(v-if="category.subs" @click="panel = !panel")
        img.small-icon(
          :class="{ open: panel }"
          src="~/assets/icons/arrow.svg"
          alt="OpenSubcategoryIcon")

    .category__panel(v-if="category.subs" v-collapse:200="panel")
      span.subcategory(
        v-for="subcategory in category.subs"
        v-text="subcategory.title"
        :key="'subcategory-' + subcategory.id"
        :class="{ 'selected': selected.subcategory === subcategory.id }"
        @click="changeQuery(['category'], { subcategory: subcategory.id })")
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import { useQuery } from '~/composables/query'

export default defineComponent({
  props: {
    category: {
      type: Object,
      required: true,
    },
    selected: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const { changeQuery } = useQuery()
    return { panel: ref(false), changeQuery }
  },
})
</script>


<style lang="scss" scoped>
.category {
  position: relative;

  span:hover {
    cursor: pointer;
    color: var(--accent);
  }

  .category__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    font-size: 16px;

    span {
      display: flex;
      align-items: center;
      height: 30px;
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
      height: 30px;
      font-size: 16px;
      width: fit-content;
    }
  }
}
</style>