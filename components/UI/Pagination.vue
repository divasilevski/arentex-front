<template lang="pug">
  .pagination
    .pag-item(
      v-for="(item, index) in items" :key="'pag-item-' + index"
      v-text="item || '...'"
      :class="{ selected: item === page, dots: !item }"
      @click="item && change(item)") 

</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'
import { pagination } from '~/assets/scripts/utils'

export default defineComponent({
  props: {
    total: {
      type: Number,
      default: 100,
    },
    skip: {
      type: Number,
      default: 24,
    },
    limit: {
      type: Number,
      default: 12,
    },
  },
  setup(props, { emit }) {
    // -= Computed =-
    const page = computed(() => props.skip / props.limit + 1)
    const pages = computed(() => Math.ceil(props.total / props.limit))
    const items = computed(() => {
      const calculation = pagination(page.value, pages.value)
      return calculation.length < 2 ? [] : calculation
    })

    return {
      page,
      items,

      // -= emits =-
      change: (page) => emit('change', page),
    }
  },
})
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;

  .pag-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin: 0 5px;
    box-shadow: 0px 0px 20px -4px rgb(34 60 80 / 10%);
    background: var(--white);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    color: var(--gray);
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;

    @include mw(424px) {
      width: 32px;
      height: 32px;
      margin: 0 2px;
    }

    @include mw(374px) {
      width: 28px;
      height: 28px;
      margin: 0 1px;
    }

    &:hover {
      color: var(--accent);
    }

    &.selected {
      color: var(--main);
      pointer-events: none;
      cursor: default;
    }

    &.dots {
      box-shadow: none;
      background: none;
      cursor: default;

      &:hover {
        color: var(--gray);
      }
    }
  }
}
</style>