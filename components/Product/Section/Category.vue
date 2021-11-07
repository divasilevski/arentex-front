<template lang="pug">
  ProductSection.product-category(v-if="category || subcategory")
    .product-category__item(v-if="category")
      h3 Категория
      nuxt-link(:to="toCategory")
        p.category {{ category.name }}

      span.only-not-desktop(v-if="subcategory")
        span.category {{ '&nbsp;&nbsp;>&nbsp;&nbsp;'}} 
        nuxt-link(:to="toSubcategory")
          p.category {{ subcategory.name }}

    .product-category__item.only-desktop(v-if="subcategory")
      h3 Подкатегория
      nuxt-link(:to="toSubcategory")
        p.category {{ subcategory.name }}
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    category: {
      type: Object,
      default: () => ({ id: 0, name: 'Категория' }),
    },
    subcategory: {
      type: Object,
      default: () => ({ id: 0, name: 'Подкатегория' }),
    },
  },
  setup({ category, subcategory }) {
    return {
      toCategory: `/catalog?category=${category.id}`,
      toSubcategory: `/catalog?subcategory=${subcategory.id}`,
    }
  },
})
</script>


<style lang="scss" scoped>
.product-category {
  width: 100%;
  height: fit-content;

  .product-category__item:not(:last-child) {
    margin-bottom: 30px;

    @include mw(1024px) {
      margin-bottom: 0;
    }
  }

  .category {
    display: inline-flex;
    font-size: 16px;
    color: var(--gray);
    font-weight: 600;
  }

  p.category {
    cursor: pointer;

    &:hover {
      color: var(--accent);
    }
  }
}
</style>