<template lang="pug">
  .product.page.container
    .product__head
      ProductCarousel
      ProductPrice

</template>

<style lang="scss" scoped>
.product {
  .product__head {
    display: flex;

    @include mw(1024px) {
      flex-direction: column;
    }

    .product-carousel {
      @include mw(719px) {
        margin: -40px -30px 0;
        width: calc(100% + 60px);
      }
    }

    .product-price {
      margin-left: 20px;

      @include mw(1024px) {
        margin-top: 40px;
        margin-left: unset;
      }
    }
  }
}
</style>