<template lang="pug">
  .catalog-tags
    .tag(
      v-for="(tag, index) in tags"
      :key="'tag-' + index"
      @click="queryTag(tag.key)")
      .tag__value {{ tag.value }}
      img(src="~/assets/icons/close-black.svg" alt="CloseIcon")

</template>

.<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useCatalog } from '~/composables/catalog'
import { useQuery } from '~/composables/query'

function getSubcategories(categories) {
  return categories.reduce((acc, cur) => {
    return [...acc, ...(cur.subcategories || [])]
  }, [])
}

export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  setup({ categories }) {
    const { query } = useQuery()
    const { queryTag, toHumanTags } = useCatalog()

    // -= Computed =-
    const subcategories = computed(() => getSubcategories(categories) || [])

    const tags = computed(() => {
      const payload = { categories, subcategories: subcategories.value }
      return Object.entries(query.value)
        .map((el) => toHumanTags(el, payload))
        .filter(({ value }) => value !== null)
    })

    return { tags, queryTag }
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
    padding: 5px 15px;
    background-color: var(--light-gray);
    border-radius: 38px;
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
