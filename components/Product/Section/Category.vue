<template lang="pug">
  ProductSection.product-category(v-if="category || subcategory")
    .product-category__item(v-if="category")
      h3 Категория
      p.category {{ category.title }}
      span.only-not-desktop(v-if="subcategory")
        span.category {{ '&nbsp;&nbsp;>&nbsp;&nbsp;'}} 
        p.category {{ subcategory.title }}

    .product-category__item.only-desktop(v-if="subcategory")
      h3 Подкатегория
      p.category {{ subcategory.title }}
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    category: {
      type: Object,
      default: () => ({ id: 123, title: 'Зимний инвентарь' }),
    },
    subcategory: {
      type: Object,
      default: () => ({ id: 123, title: 'Лыжи' }),
    },
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