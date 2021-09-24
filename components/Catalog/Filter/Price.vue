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
    .price-filter__inputs
      UIInput(v-model.number="price[0]" type="number" :min="min" :max="max")
      UIInput(v-model.number="price[1]" type="number" :min="min" :max="max")

</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'

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
      price: ref([props.min, props.max]),
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
  .vue-slider {
    padding: 7px 5px !important;
  }

  .price-filter__inputs {
    display: flex;
    justify-content: space-between;
    margin: 10px -10px 0;

    .input {
      width: 100%;
      margin: 0 10px;
    }
  }
}
</style>


