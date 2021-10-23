<template lang="pug">
  .basket-card
    .basket-card__remove(@click="remove")
      img.icon(src="~/assets/icons/close-black.svg" alt="RemoveIcon")

    .basket-card__image
      img(:src="mediaPath + product.thumbnail" :alt="product.title")

    .basket-card__body
      nuxt-link.basket-card__title(:to="path" @click.native="close") {{ product.title }}
      .basket-card__price #[span {{ formatPrice(product.price) }} ₽] / день
      UIDatePicker(:value="product.range" @input="changeDates")

      .basket-card__footer
        BasketCounter(:count="product.count" @minus="minus" @plus="plus")
        .basket-card__total
          | итого #[span {{ formatPrice(product.total) }} ₽] 
          | за {{ product.days }} {{ num2str(product.days, ['день', 'дня', 'дней']) }}

</template>

<script>
import { computed } from '@nuxtjs/composition-api'
import { defineComponent } from '@vue/composition-api'
import { num2str, formatPrice } from '~/assets/scripts/utils'

export default defineComponent({
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  setup({ product }, { emit }) {
    return {
      path: computed(() => `/product/${product.id}`),
      mediaPath: process.env.MEDIA_URL,
      formatPrice,
      num2str,

      // -= Emits =-
      changeDates: (dates) => emit('changeDates', dates),
      remove: () => emit('remove'),
      close: () => emit('close'),
      minus: () => emit('minus'),
      plus: () => emit('plus'),
    }
  },
})
</script>

<style lang="scss" scoped>
$tablet: 650px;

.basket-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.1);
  background: var(--white);
  border-radius: 10px;

  @include mw($tablet) {
    flex-direction: column;
  }

  .basket-card__remove {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background: var(--light-gray);
    cursor: pointer;

    &:hover {
      background: var(--light-selected);

      img {
        transition: 0.3s;
        transform: rotate(90deg);
      }
    }

    img {
      width: 12px;
      height: 12px;
    }
  }

  .basket-card__image {
    width: 150px;

    @include mw($tablet) {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    img {
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
  }

  .basket-card__body {
    width: 100%;
    padding: 20px;
  }

  .basket-card__title {
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
    width: fit-content;
    text-transform: uppercase;
    font-weight: 500;

    &:hover {
      transition: 0.2s;
      color: var(--accent);
    }
  }

  .basket-card__price {
    margin: 5px 0 15px;
    font-size: 12px;

    span {
      font-size: 14px;
    }
  }

  .basket-card__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;

    @include mw($tablet) {
      flex-direction: column;
    }

    .basket-card__total {
      font-weight: 500;
      font-size: 16px;
      color: var(--main);

      @include mw($tablet) {
        margin-top: 15px;
      }

      span {
        font-weight: 700;
        font-size: 20px;
      }
    }
  }
}
</style>
