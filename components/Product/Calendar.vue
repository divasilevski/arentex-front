<template lang="pug">
  client-only
    DatePicker(v-model="range" is-range :columns="2")
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    return {
      range: ref({
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5),
      }),
    }
  },
})
</script>

<style lang="scss" scoped>
.vc-container {
  --text-xs: 10px;
  --text-sm: 12px;
  --text-base: 14px;
  --text-lg: 16px;

  border: none;
  font-family: inherit;
}
</style>
