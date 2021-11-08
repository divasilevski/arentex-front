<template lang="pug">
  section.main-popular
    h1 Популярное
    .main-popular__grid
      MainPopularCard(
        v-for="(card, index) in popular"
        :key="'popular-' + index"
        :card="card")
      .main-popular__last(key="popular-all")
        nuxt-link(to="/catalog")
          span Каталог
          img(src="~/assets/icons/arrow.svg" alt="ArrowIcon")


</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { popular } from '~/assets/scripts/popular'

export default defineComponent({
  setup() {
    return { popular }
  },
})
</script>


<style lang="scss" scoped>
.main-popular {
  .main-popular__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-top: 40px;

    & :nth-child(2n) {
      margin-top: 45px;
    }
    & :nth-child(3n) {
      margin-top: 90px;
    }
    & :nth-child(4n) {
      margin-top: -90px;
    }
    & :nth-child(5n) {
      margin-top: -45px;
    }

    @include mw(1200px) {
      grid-template-columns: 1fr 1fr;

      & :nth-child(2n) {
        margin-top: 45px;
      }
      & :nth-child(3n) {
        margin-top: -45px;
      }
      & :nth-child(4n) {
        margin-top: 0px;
      }
    }

    @include mw(850px) {
      grid-template-columns: 1fr;
      justify-items: center;

      & :nth-child(n) {
        margin-top: 0px;
      }
    }

    .main-popular__last {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 34px;
      line-height: 34px;
      font-weight: 800;
      color: var(--main);
      margin-top: 0px;

      @include mw(850px) {
        margin-top: 20px;
        margin-bottom: 20px;
      }

      a {
        display: flex;
        align-items: flex-end;

        &:hover,
        &:active {
          margin-left: 10px;
        }

        img {
          margin: 0;
          width: 28px;
          height: 28px;
          transform: rotate(-90deg);
          margin-left: 20px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>