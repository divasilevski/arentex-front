<template lang="pug">
  .product.page.container
    .product__head
      ProductSectionCarousel(
        :images="product.images")
      ProductSectionPrice(
        :title="product.title"
        :price="product.price")
  
    .product__info
      ProductSectionDetails(
        :description="product.description"
        :specifications="product.specifications")
      ProductSectionCategory(
        :category="product.category"
        :subcategory="product.subcategory")

</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { api } from '~/assets/scripts/api'

export default defineComponent({
  async asyncData({ params, $axios }) {
    const product = await api.getProductById($axios, params.id)
    return { product }
  },
})
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include mw(1024px) {
    gap: 40px;
  }

  .product__head {
    display: flex;
    gap: 20px;

    @include mw(1024px) {
      flex-direction: column;
      gap: 30px;
    }

    .product-carousel {
      @include mw(719px) {
        margin: -40px -30px 0;
        width: calc(100% + 60px);
      }
    }
  }

  .product__info {
    display: flex;
    gap: 20px;

    @include mw(1024px) {
      flex-direction: column;
    }

    .product-details {
      @include mw(1024px) {
        order: 1;
      }
    }
  }
}
</style>