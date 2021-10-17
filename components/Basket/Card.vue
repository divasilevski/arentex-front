<template lang="pug">
  .basket-card(v-if="product")
    .basket-card__image
      img(:src="mediaPath + product.thumbnail" :alt="product.title")

    .basket-card__body
      .basket-card__title
        nuxt-link(:to="`/product/${product.id}`" @click.native="close") {{ product.title }}
        .basket-card__remove(@click="remove")
          img.icon(src="~/assets/icons/close-black.svg" alt="RemoveIcon")

      .basket-card__price #[span {{ formatPrice(product.price) }} ₽] / день
      UIDatePicker(v-model="range")
      .basket-card__footer
        BasketCounter(:count="product.count")
        .basket-card__total
          | итого #[span {{ formatPrice(countDays * product.price * product.count) }} ₽] 
          | за {{ countDays }} {{ num2str(countDays, ['день', 'дня', 'дней']) }}

</template>

<script>
import { defineComponent, ref, computed } from '@vue/composition-api'
import { num2str, formatPrice } from '~/assets/scripts/utils'
import { getDaysCount } from '~/assets/scripts/date'

export default defineComponent({
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const range = ref(props.product.range)

    const countDays = computed(() => {
      const start = new Date(range.value.start)
      const end = new Date(range.value.end)
      return getDaysCount(start, end)
    })

    const close = () => {
      console.log('close,')
    }
    const remove = () => {
      console.log('remove,')
    }

    return {
      range,
      formatPrice,
      num2str,
      mediaPath: process.env.MEDIA_URL,

      countDays,
      close,
      remove,
    }
  },
})
</script>

<style lang="scss" scoped>
.basket-card {
  display: flex;
  align-items: flex-start;
  box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.1);
  background: var(--white);
  border-radius: 10px;

  .basket-card__image {
    width: 150px;

    img {
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
  }

  .basket-card__body {
    padding: 20px;
    width: 100%;

    .basket-card__title {
      display: flex;
      justify-content: space-between;
      text-transform: uppercase;
      font-weight: 500;

      a {
        margin-right: 20px;

        &:hover {
          transition: 0.2s;
          color: var(--accent);
        }
      }

      .basket-card__remove {
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

      .basket-card__total {
        font-weight: 500;
        font-size: 16px;
        color: var(--main);

        span {
          font-weight: 700;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
