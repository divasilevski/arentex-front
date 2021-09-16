<template lang="pug">
  .slider-preview
    .slider-preview__sector(
      v-for="(image, index) in reversedImages"
      :key="'sector-' + index + alt")
      img.slider-preview__image(:src="image" :alt="alt")
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    alt: {
      type: String,
      default: 'Картинка',
    },
  },
  setup(props) {
    return {
      reversedImages: computed(() => props.images.reverse()),
    }
  },
})
</script>

<style lang="scss" scoped>
.slider-preview {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;

  .slider-preview__sector {
    flex-grow: 1;
    z-index: 1;

    .slider-preview__image {
      pointer-events: none;
      position: absolute;
      @include filled;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      z-index: 2;
    }
  }
}
</style>