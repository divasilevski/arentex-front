<template lang="pug">
  .basket-counter
    .basket-counter__btn(:class="{ disabled: count <= min }") -
    .basket-counter__value {{ count }}
    .basket-counter__btn(:class="{ disabled: count >= max }") +

</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    count: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
  setup() {},
})
</script>

<style lang="scss" scoped>
.basket-counter {
  display: flex;
  align-items: center;

  .basket-counter__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding-bottom: 5px;
    border-radius: 32px;
    background: var(--light-gray);
    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: var(--light-selected);
    }

    &:active {
      color: var(--gray);
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  .basket-counter__value {
    min-width: 64px;
    text-align: center;
    font-weight: 500;
  }
}
</style>
