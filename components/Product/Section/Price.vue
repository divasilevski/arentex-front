<template lang="pug">
  ProductSection.product-price
    h1.product-price__title {{ title }}
    .product-price__price #[span {{ formatPrice(price) }} ₽] / день

    .product-price__caption Арендовать
    .product-price__date
      UIDatePicker(v-model="range" message="* без учета дней доставки")
      client-only
        img.icon(v-if="count" src="~/assets/icons/basket-black.svg" alt="BasketIcon")

    .product-price__total
      | итого #[span {{ formatPrice(countDays * price) }} ₽] 
      | за {{ countDays }} {{ num2str(countDays, ['день', 'дня', 'дней']) }}

    .product-price__button
      UIButton(accent @click="addToBasket") Добавить в корзину
        img.icon(src="~/assets/icons/basket.svg" alt="BasketIcon")
        img.icon.plus(src="~/assets/icons/close.svg" alt="CloseIcon")

</template>

<script>
import {
  defineComponent,
  computed,
  useStore,
  ref,
} from '@nuxtjs/composition-api'
import { getDaysCount, compareRanges } from '~/assets/scripts/date'
import { num2str, formatPrice } from '~/assets/scripts/utils'

export default defineComponent({
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  setup({ product }) {
    // Main
    const range = ref({ start: new Date(), end: new Date() })
    const title = computed(() => product && product.title)
    const price = computed(() => product && product.price)

    const countDays = computed(() => {
      const start = range.value.start
      const end = range.value.end
      return getDaysCount(start, end)
    })

    // Basket
    const byIdAndRange = (el) => {
      const byId = el.id === product.id
      return byId && compareRanges(el.range, range.value)
    }

    const store = useStore()
    const basket = computed(() => store.state.basket.basket)
    const index = computed(() => basket.value.findIndex(byIdAndRange))
    const count = computed(() =>
      index.value > -1 ? basket.value[index.value].count : 0
    )

    const addToBasket = () => {
      if (count.value) {
        store.commit('basket/update', {
          index: index.value,
          field: 'count',
          value: count.value + 1,
        })
      } else {
        store.commit('basket/add', {
          thumbnail: product.thumbnail,
          title: title.value,
          price: price.value,
          range: range.value,
          id: product.id,
          count: 1,
        })
      }
    }

    return {
      range,
      title,
      price,
      countDays,

      count,
      addToBasket,

      num2str,
      formatPrice,
    }
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

  .product-price__date {
    position: relative;
    width: 100%;

    img {
      position: absolute;
      right: 15px;
      top: 8px;
      animation: blink 3s infinite;
    }
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
    flex-direction: column;
    align-items: center;

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

    span {
      text-transform: lowercase;
    }
  }
}

@keyframes blink {
  from {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  to {
    transform: rotate(10deg);
  }
}
</style>