<template lang="pug">
  .basket
    .basket__header
      h2 Корзина&nbsp;
      span(v-if="basket.length !== 0" @click="clear" light) (Очистить)

    .basket__cards
      .basket__nothing(v-if="basket.length === 0")
        p В корзине пусто 🙁
      BasketCard(
        v-for="(product, index) in basket"
        :key="product.id + index"
        :product="product")

    .basket__footer
      h3 Итого #[span {{ formatPrice(total) }} ₽] 
      UIButton(accent :disabled="basket.length === 0") Перейти к оформлению

</template>

<script>
import { defineComponent, useStore, computed } from '@nuxtjs/composition-api'
import { getDaysCount } from '~/assets/scripts/date'
import { formatPrice } from '~/assets/scripts/utils'

export default defineComponent({
  setup() {
    const store = useStore()
    const basket = computed(() => store.state.basket.basket)
    const total = computed(() =>
      basket.value.reduce((a, b) => {
        const start = new Date(b.range.start)
        const end = new Date(b.range.end)
        return b.price * b.count * getDaysCount(start, end) + a
      }, 0)
    )
    const clear = () => store.commit('basket/clear')

    return { total, basket, clear, formatPrice }
  },
})
</script>

<style lang="scss" scoped>
.basket {
  height: 100%;
  padding: 30px 0;

  .basket__header {
    display: flex;
    align-items: baseline;
    padding: 0 30px;
    height: 40px;

    span {
      color: var(--gray);
      cursor: pointer;

      &:hover {
        color: var(--accent);
      }
    }
  }

  .basket__cards {
    display: flex;
    flex-direction: column;
    height: calc(100% - 90px);
    padding: 15px 30px;
    overflow-y: auto;

    .basket__nothing {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .basket-card {
      margin: 10px 0;
    }
  }

  .basket__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 30px 0;
    height: 50px;
  }
}
</style>
