<template lang="pug">
  nuxt-link.popular-card(:style="cardStyle" :to="cardLink")
    .popular-card__title(v-text="card.title")
    .popular-card__image
      img(:src="card.image" :alt="card.title")

</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    card: {
      type: Object,
      default: () => ({}),
    },
  },
  setup({ card }) {
    // -= Computed =-
    const cardStyle = computed(() => `background-color: ${card.color}`)
    const cardLink = computed(() => `/catalog?category=${card.id}`)

    return { cardStyle, cardLink }
  },
})
</script>

<style lang="scss" scoped>
.popular-card {
  position: relative;
  width: min(100%, 450px);
  height: 250px;
  padding: 40px 50px;
  overflow: hidden;

  @include mw(400px) {
    padding: 30px 30px;
  }

  &:hover,
  &:active {
    opacity: 0.9;
    .popular-card__image {
      margin-right: -10px;
    }
  }

  .popular-card__title {
    font-size: 34px;
    line-height: 34px;
    font-weight: 800;
    color: var(--white);

    @include mw(400px) {
      font-size: 28px;
      line-height: 28px;
    }
  }

  .popular-card__image {
    position: absolute;
    @include filled;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    img {
      width: 200px;
      height: 200px;
    }
  }
}
</style>
