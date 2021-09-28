<template lang="pug">
  .product-price
    h1.product-price__title Название продукта
    ProductCalendar
    h2.product-price__price итого 12 399 Р
</template>

<style lang="scss" scoped>
.product-price {
  position: relative;
  min-width: 540px;
  height: 400px;
  padding: 20px;
  box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.1);
  background: var(--white);
  border-radius: 10px;

  @include mw(1024px) {
    min-width: unset;
    padding: unset;
    box-shadow: unset;
  }

  .product-price__title {
    font-size: 24px;
    line-height: 28px;
  }

  .product-calendar {
    margin-top: 20px;
    @include mw(719px) {
      display: none;
    }
  }

  .product-price__price {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
}
</style>