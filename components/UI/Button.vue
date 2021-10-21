<template lang="pug">
  nuxt-link.button(v-if="to" :to="to" :class="{block, light, accent, disabled}" @click.native="$emit('click')")
    slot
  button.button(v-else :class="{block, light, accent, disabled}" @click="$emit('click')")
    slot
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    to: {
      type: String,
      default: '',
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    accent: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  font-family: inherit;
  justify-content: center;
  margin: 0;
  padding: 0 44px;
  border: none;
  user-select: none;
  cursor: pointer;
  height: 38px;
  font-size: 14px;
  line-height: 14px;
  white-space: nowrap;
  text-transform: uppercase;
  background: var(--main);
  color: var(--light-gray);

  &:hover {
    color: var(--white);
    background: var(--selected);
  }

  &:active {
    color: var(--gray);
  }

  &.block {
    width: 100%;
  }

  &.disabled {
    pointer-events: none;
    background: var(--selected);
    color: var(--gray);
  }

  &.light {
    background: var(--light-gray);
    color: var(--main);

    &:hover {
      color: var(--black);
      background: var(--light-selected);
    }

    &:active {
      color: var(--gray);
    }

    &.disabled {
      color: var(--gray);
    }
  }

  &.accent {
    &:hover {
      background: var(--accent);
    }
    &:active {
      color: var(--main);
    }
  }
}
</style>
