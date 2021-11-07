<template lang="pug">
  ModalWrapper(name="category")
    .modal-category
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
.modal-category {
  height: 100%;
}
</style>

