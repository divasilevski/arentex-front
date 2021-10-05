<template lang="pug">
  nuxt-link.catalog-card(:to="`/product/${id}`")
    .catalog-card__images
      img(:src="mediaPath + image" :alt="title")
    .catalog-card__title {{ title }}
    .catalog-card__price от #[span {{ formatPrice(price) }} ₽] / день
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { formatPrice } from '~/assets/scripts/utils'

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
    image: {
      type: String,
      default: '',
    },
  },
  setup() {
    return { formatPrice, mediaPath: process.env.MEDIA_URL }
  },
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
    padding: 20px;
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
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
