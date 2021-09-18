<template lang="pug">
  .select(v-click-outside="closePanel" :class="{open: panel}")
    .selected(@click="togglePanel" )
      .selected__title {{ selected.title }}
      img.selected__icon(src="~/assets/icons/arrow.svg" alt="SelectIcon")

    .panel(v-if="panel")
      .panel__item(
        v-for="(option, index) in options"
        :key="'select-option-' + index + option.title"
        @click="selectOption(option)"
        :class="{active: option.title === selected.title}"
      ) {{ option.title }}
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Object,
      default: () => ({
        title: 'Ничего не выбрано',
      }),
    },
  },
  setup(_, { emit }) {
    const panel = ref(false)
    const togglePanel = () => (panel.value = !panel.value)
    const closePanel = () => (panel.value = false)

    const selectOption = (option) => {
      emit('change', option)
      togglePanel()
    }

    return { panel, togglePanel, closePanel, selectOption }
  },
})
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 100%;
  z-index: 50;

  .selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: inherit;

    width: 100%;
    padding: 0 15px;
    font-size: 16px;
    line-height: 16px;
    background-color: var(--light-gray);
    border-radius: 38px;
    height: 38px;
    cursor: pointer;
    user-select: none;
    font-weight: 500;

    .selected__icon {
      width: 16px;
      height: 16px;
      transform: rotate(-90deg);
      margin-left: 10px;
      transition: 0.3s ease;
    }

    &:hover {
      background-color: var(--light-selected);
    }
  }

  &.open {
    .selected .selected__icon {
      transform: rotate(0deg);
    }
  }

  .panel {
    position: absolute;
    overflow: hidden;
    z-index: -1;
    right: 0;
    left: 0;
    background-color: var(--light-gray);
    padding: 31px 0 12px;
    top: 19px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    .panel__item {
      padding: 0 15px;
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 38px;

      &.active {
        font-weight: 500;
      }

      &:hover {
        background-color: var(--light-selected);
      }
    }
  }
}
</style>
