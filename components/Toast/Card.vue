<template lang="pug">
  .toast-card
    span(v-html="text")
    img.icon(src="~/assets/icons/close-black.svg" alt="IconClose")
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: 'Мы вас любим ❤️️❤️️❤️️',
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  setup(props, { emit }) {
    onMounted(() => {
      setTimeout(() => {
        emit('timeout')
      }, props.duration)
    })
  },
})
</script>


<style lang="scss" scoped>
.toast-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: inherit;
  min-width: 320px;
  max-width: 320px;
  padding: 8px 20px;
  box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.1);
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;

  &::before {
    content: ' ';
    position: absolute;
    @include filled;
    background-color: var(--light-gray);
    border: 1px solid var(--gray);
    border-radius: 10px;
    z-index: -1;
    opacity: 0.95;
  }

  img {
    width: 12px;
    height: 12px;
    transition: 0.3s;
    margin-left: 10px;
  }

  &:hover {
    &::before {
      background-color: var(--light-selected);
      opacity: 1;
    }

    img {
      transform: rotate(90deg);
    }
  }
}
</style>