<template lang="pug">
  .category-overlay
    .category-overlay__header
      h2 Все категории
    .category-overlay__items
      CategoryList(:categories="categories" @change="closeOverlay")
    .category-overlay__footer

</template>

<script>
import { defineComponent, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const store = useStore()

    // -= Methods =-
    const closeOverlay = () => store.commit('toggleOverlay', 'category')

    return { closeOverlay }
  },
})
</script>

<style lang="scss" scoped>
$tablet: 650px;

.category-overlay {
  height: 100%;
  padding: 30px 0;

  .category-overlay__header {
    display: flex;
    align-items: baseline;
    padding: 0 30px;
    height: 45px;
  }

  .category-overlay__items {
    display: flex;
    flex-direction: column;
    height: calc(100% - 45px);
    padding: 15px 30px;
    overflow-y: auto;

    @include mw($tablet) {
      height: calc(100% - 110px);
    }
  }

  .category-overlay__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10px;
  }
}
</style>
