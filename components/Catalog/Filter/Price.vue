<template lang="pug">
  .price-filter
    VueSlider(
      v-model="price"
      @change="$emit('priceChanged', $event)"
      :enable-cross="false"
      :tooltip="'none'"
      :min="min"
      :max="max"
      lazy)

</template>

<script>
import { defineComponent } from '@vue/composition-api'

import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'

export default defineComponent({
  components: { VueSlider },
  props: {
    max: {
      type: Number,
      default: 1000,
    },
    min: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    return {
      price: [props.min, props.max],
    }
  },
})
</script>

<style lang="scss" scoped>
.price-filter {
  .vue-slider ::v-deep .vue-slider-process {
    background-color: var(--accent);
  }
  .vue-slider ::v-deep .vue-slider-rail {
    background-color: var(--light-gray);
  }
  .vue-slider ::v-deep .vue-slider-dot-handle {
    box-shadow: 0px 0px 4px 0px rgb(0 0 0 / 32%);
  }
}
</style>


