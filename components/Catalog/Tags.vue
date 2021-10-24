<template lang="pug">
  .catalog-tags
    .tag(
      v-for="(tag, index) in tags"
      :key="'tag-' + index"
      @click="changeQuery([tag.key])")
      .tag__value {{ tag.value }}
      img(src="~/assets/icons/close-black.svg" alt="CloseIcon")

</template>

.<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useQuery } from '~/composables/query'

export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  setup({ categories }) {
    const { query, changeQuery } = useQuery()

    // -= Computed =-
    const tags = computed(() => {
      return Object.entries(query.value)
        .map(toHumanTags)
        .filter(({ value }) => value !== null)
    })

    // -= Methods =-
    const toHumanTags = ([key, value]) => {
      switch (key) {
        case 'category':
          const category = categories.find((cat) => `${cat.id}` === value)
          return { key, value: (category && category.name) || null }
        case 'sort':
          return { key, value: null }
        case 'minprice':
          return { key, value: 'не менее ' + value + ' ₽' }
        case 'maxprice':
          return { key, value: 'до ' + value + ' ₽' }
        default:
          return { key, value }
      }
    }

    return { tags, changeQuery }
  },
})
</script>

<style lang="scss" scoped>
.catalog-tags {
  margin-bottom: 10px;
  .tag {
    display: inline-flex;
    align-items: center;
    font-family: inherit;
    padding: 0 15px;
    background-color: var(--light-gray);
    border-radius: 38px;
    height: 26px;
    font-size: 14px;
    line-height: 16px;
    margin-right: 15px;
    cursor: pointer;
    margin-bottom: 10px;

    img {
      width: 12px;
      height: 12px;
      transition: 0.3s;
      margin-left: 10px;
    }

    &:hover {
      background-color: var(--light-selected);
      img {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
