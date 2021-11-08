<template lang="pug">
  .price-filter
    VueSlider(
      :value="price"
      :enable-cross="false"
      :tooltip="'none'"
      :min="min"
      :max="max"
      @change="changeSlider"
      @dragging="draggingSlider"
      @drag-end="dragEndSlider"
      silent
      lazy)
    .price-filter__inputs
      UIInput( type="number" :value="price[0]" :min="min" :max="max" @blur="blurMin")
      UIInput( type="number" :value="price[1]" :min="min" :max="max" @blur="blurMax")

</template>

<script>
import { defineComponent, watch, ref, computed } from '@vue/composition-api'
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import { useCatalog } from '~/composables/catalog'
import { useQuery } from '~/composables/query'

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
    const { queryPrice } = useCatalog()
    const { query } = useQuery()
    const price = ref([props.min, props.max])

    // -= Computed =-
    const propsWatcher = computed(
      () => props.min.toString() + props.max.toString()
    )

    //  -= Watch =-
    watch(
      [query, propsWatcher],
      () => {
        const minCond = (query.value.minprice || -Infinity) < props.min
        const maxCond = (query.value.maxprice || Infinity) > props.max
        price.value = [
          minCond ? props.min : +query.value.minprice,
          maxCond ? props.max : +query.value.maxprice,
        ]
      },
      { immediate: true }
    )

    // -= Methods =-
    const blurMin = (event) => {
      const value = event.target.value
      queryPrice([value, price.value[1]], props)
    }
    const blurMax = (event) => {
      const value = event.target.value
      queryPrice([price.value[0], value], props)
    }
    const changeSlider = (event) => {
      queryPrice(event, props)
    }
    const draggingSlider = (event) => {
      price.value = event
    }
    const dragEndSlider = () => {
      queryPrice(price.value, props)
    }

    return {
      price,
      changeSlider,
      draggingSlider,
      dragEndSlider,
      blurMin,
      blurMax,
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


