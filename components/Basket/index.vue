<template lang="pug">
  .basket
    .basket__header
      h2 Корзина&nbsp;
      span(v-if="!isEmpty" @click="clear") (Очистить)

    .basket__cards
      BasketEmpty(v-if="isEmpty")
      BasketCard(
        v-for="(product, index) in basket" :key="productKey(product)"
        :product="{ ...product, ...expand(index) }"
        @changeDates="changeDates(index, $event)"
        @remove="remove(index)"
        @minus="minus(index)"
        @plus="plus(index)"
        @close="close")

    .basket__footer
      h3 Итого #[span {{ formatPrice(total) }} ₽]
      UIButton(to="/checkout" @click="close" :disabled="isEmpty" accent) Перейти к оформлению

</template>

<script>
import { computed, defineComponent, useStore } from '@nuxtjs/composition-api'
import { useBasket } from '~/composables/basket'
import { formatPrice } from '~/assets/scripts/utils'

export default defineComponent({
  setup() {
    const store = useStore()
    const { basket, ...otherMethods } = useBasket()

    // -= Computed =-
    const isEmpty = computed(() => basket.value.length === 0)

    // -= Methods =-
    const productKey = (item) => item.id + item.range.start + item.range.end

    const close = () => store.commit('toggleOverlay', 'basket')

    return { formatPrice, basket, isEmpty, productKey, close, ...otherMethods }
  },
})
</script>

<style lang="scss" scoped>
$tablet: 650px;

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

    @include mw($tablet) {
      height: calc(100% - 110px);
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

    @include mw($tablet) {
      flex-direction: column;
      align-items: flex-start;
      height: 80px;

      h3 {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
