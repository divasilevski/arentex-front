<template lang="pug">
  .catalog-grid
    CatalogCard(
      v-for="card in cards" :key="card.id"
      :id="card.id"
      :title="card.title"
      :price="card.price"
      :image="card.thumbnail")
    CatalogBlank(v-if="cards.length === 0")

</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
})
</script>


<style lang="scss" scoped>
.catalog-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
</style>