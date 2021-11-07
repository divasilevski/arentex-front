<template lang="pug">
  DrawerWrapper(name="category")
    .drawer-category
      CategoryOverlay(:categories="categories")
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.drawer-category {
  height: calc(100% - 80px);

  @include mw(500px) {
    height: 100%;
  }
}
</style>

