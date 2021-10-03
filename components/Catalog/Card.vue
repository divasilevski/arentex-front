<template lang="pug">
  nuxt-link.catalog-card(:to="`/product/${id}`")
    .catalog-card__images
      img(:src="images[0]" :alt="title")
    .catalog-card__title {{ title }}
    .catalog-card__price от #[span {{ price }} ₽] / день
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    id: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: 'Название продукта',
    },
    price: {
      type: Number,
      default: 1000,
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  setup() {},
})
</script>

<style lang="scss" scoped>
.catalog-card {
  position: relative;
  box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.1);
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .catalog-card__title {
      transition: 0.2s;
      color: var(--accent);
    }
  }

  .catalog-card__images {
    width: 100%;
    height: 200px;
  }

  .catalog-card__title {
    text-transform: uppercase;
    font-weight: 500;
    margin: 10px 15px;
  }
  .catalog-card__price {
    text-align: right;
    margin: 10px 15px 15px;
    font-size: 12px;

    span {
      font-size: 14px;
    }
  }
}
</style>
