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

    .product-price {
      margin-left: 20px;
    }
  }
}
</style>