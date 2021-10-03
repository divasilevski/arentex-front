<template lang="pug">
  ProductSection.product-price
    h1.product-price__title Название продукта
    .product-price__price #[span {{ formatPrice(price) }} ₽] / день

    .product-price__caption Арендовать
    UIDatePicker(v-model="range" message="* без учета дней доставки")

    .product-price__total
      | итого #[span {{ formatPrice(countDays * price) }} ₽] 
      | за {{ countDays }} {{ num2str(countDays, ['день', 'дня', 'дней']) }}

    .product-price__button
      UIButton(accent) Добавить в корзину
        img.icon(src="~/assets/icons/basket.svg" alt="BasketIcon")
        img.icon.plus(src="~/assets/icons/close.svg" alt="CloseIcon")
</template>

<script>
import { computed, defineComponent, ref } from '@vue/composition-api'
import { getDaysCount } from '~/assets/scripts/date'
import { num2str, formatPrice } from '~/assets/scripts/utils'

export default defineComponent({
  props: {
    price: {
      type: [String, Number],
      default: 1000,
    },
  },
  setup() {
    const range = ref({ start: new Date(), end: new Date() })

    const countDays = computed(() => {
      const start = range.value.start
      const end = range.value.end
      return getDaysCount(start, end)
    })

    return { range, countDays, num2str, formatPrice }
  },
})
</script>


<style lang="scss" scoped>
.product-price {
  position: relative;
  min-width: 540px;

  @include mw(1024px) {
    min-width: unset;
  }

  .product-price__title {
    font-size: 24px;
    line-height: 28px;
  }

  .product-price__caption {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 5px;
    margin-top: 30px;
  }

  .product-price__price {
    margin-top: 10px;
    font-weight: 500;
    font-size: 18px;
    color: var(--accent);

    span {
      font-weight: 700;
      font-size: 24px;
    }
  }

  .product-price__total {
    text-align: right;
    margin-top: 10px;
    font-weight: 500;
    font-size: 16px;
    color: var(--main);

    span {
      font-weight: 700;
      font-size: 20px;
    }
  }

  .product-price__button {
    margin-top: 70px;
    display: flex;
    justify-content: center;

    @include mw(1024px) {
      margin-top: 30px;
    }

    img {
      transform: rotate(45deg);
      width: 16px;
      height: 16px;
      margin-left: 5px;

      &.plus {
        width: 8px;
        height: 8px;
        margin-left: 0px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>