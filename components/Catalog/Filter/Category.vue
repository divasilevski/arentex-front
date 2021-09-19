<template lang="pug">
  .category
    .category__item
      nuxt-link(:to="`?category=${category.id}`") {{ category.title }}
      .category__more(v-if="category.subs" @click="togglePanel")
        img.small-icon(
          :class="{ open: panel }"
          src="~/assets/icons/arrow.svg"
          alt="OpenSubcategoryIcon")

    .category__panel(v-if="category.subs" v-collapse:200="panel")
      nuxt-link.subcategory(
        v-for="subcategory in category.subs"
        :key="'subcategory-' + subcategory.id"
        :to="`?subcategory=${subcategory.id}`"
      ) {{subcategory.title}}
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const panel = ref(false)
    const togglePanel = () => (panel.value = !panel.value)
    return { panel, togglePanel }
  },
})
</script>


<style lang="scss" scoped>
.category {
  position: relative;

  a:hover {
    color: var(--accent);
  }

  .category__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    font-size: 16px;

    a {
      display: flex;
      align-items: center;
      height: 30px;
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