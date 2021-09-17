<template lang="pug">
  .input(:class="{ focus, input_icon: $slots.default }")
    input.input__textfield(
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @focus="focus = true"
      @blur="focus = false"
      :min="min" :max="max"
      @input="$emit('input', $event.target.value)")
    .input__error(v-if="error") {{ error }}
    .input__message(v-if="message") {{ message }}
    .input__icon(v-if="$slots.default")
      slot

</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    min: {
      type: Number,
      default: '',
    },
    max: {
      type: Number,
      default: '',
    },
  },
  setup() {
    return {
      focus: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.input {
  position: relative;

  .input__textfield {
    display: flex;
    align-items: center;
    font-family: inherit;
    width: 100%;
    padding: 0 15px;
    font-size: 16px;
    line-height: 16px;
    border: none;
    background-color: var(--light-gray);
    border-radius: 38px;
    height: 38px;

    &::placeholder {
      color: var(--gray);
    }

    &:focus {
      outline: none;
      background-color: var(--light-selected);
    }
  }

  &.input_icon .input__textfield {
    padding-right: 30px;
  }

  &.focus {
    .input__error {
      display: none;
    }
  }

  .input__error {
    font-size: 12px;
    color: var(--error);
    padding: 0 15px;
  }

  .input__message {
    font-size: 12px;
    color: var(--gray);
    padding: 0 15px;
  }

  .input__icon {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    height: 38px;
    padding-right: 10px;
  }
}
</style>