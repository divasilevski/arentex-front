<template lang="pug">
  .product-price
    h1.product-price__title Название продукта
    ProductCalendar
    .product-price__price 123993 p
</template>

<style lang="scss" scoped>
.product-price {
  height: 400px;
  padding: 20px;
  box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.1);
  background: var(--white);

  .product-price__title {
    font-size: 24px;
    line-height: 28px;
  }

  .product-price__price {
  }
}
</style>