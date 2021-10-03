<template lang="pug">
  .data-picker(ref="picker" @mouseenter="evalColumns" @touchstart="evalColumns")
    .data-picker__input
      client-only
        DatePicker(
          :value="value"
          :columns="columns"
          :step="1"
          :min-date="new Date()"
          @input="$emit('input', $event)"
          is-range)
          template(v-slot="{ inputValue, inputEvents }")
            .data-picker-input(v-on="inputEvents.start")
              .date-text(v-if="inputValue.start === inputValue.end")
                span.text на&nbsp;
                span.date {{ toHumanDate(inputValue.start) }}
              .date-text(v-else)
                span.text с&nbsp;
                span.date {{ toHumanDate(inputValue.start) }}
                span.text &nbsp;по&nbsp; 
                span.date {{ toHumanDate(inputValue.end) }}
    .data-picker__message(v-if="message") {{ message }}
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import { getDateFromString, getHumanDate } from '~/assets/scripts/date'

export default defineComponent({
  props: {
    message: {
      type: String,
      default: '',
    },
    value: {
      type: Object,
      default: () => ({
        start: new Date(),
        end: new Date(),
      }),
    },
  },
  setup() {
    const picker = ref(null)
    const columns = ref(2)

    return {
      picker,
      columns,

      // -= Methods =-
      toHumanDate: (stringDate) => {
        const date = getDateFromString(stringDate, '.')
        return getHumanDate(date)
      },
      evalColumns: () => {
        columns.value = picker.value.clientWidth < 500 ? 1 : 2
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.data-picker {
  width: 100%;

  .data-picker__input {
    background-color: var(--light-gray);
    border-radius: 38px;
    height: 38px;
    width: 100%;

    .vc-container {
      --text-xs: 10px;
      --text-sm: 12px;
      --text-base: 14px;
      --text-lg: 16px;

      border: none;
      font-family: inherit;
    }

    .data-picker-input {
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-size: 16px;
      line-height: 16px;
      background-color: var(--light-gray);
      border-radius: 38px;
      height: 38px;

      &:hover {
        background-color: var(--light-selected);
      }

      .date-text {
        display: flex;
        align-items: baseline;
      }

      span.text {
        font-size: 14px;
        line-height: 16px;
      }

      span.date {
        font-weight: 500;
      }
    }
  }

  .data-picker__message {
    font-size: 12px;
    color: var(--gray);
    padding: 0 15px;
  }
}
</style>
