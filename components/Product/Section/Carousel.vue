<template lang="pug">
  ProductSection.product-carousel
    client-only
      agile.swiper(:class="{ 'one-slide': images.length <= 1 }")
        .slide(v-for="(slide, index) in images" :key="'carousel-' + index")
          img(:src="mediaPath + slide" draggable="false" alt="CarouselImage")
    UIImageViewer(:images="images")

</template>


<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return { mediaPath: process.env.MEDIA_URL }
  },
})
</script>

<style lang="scss" scoped>
.product-carousel {
  position: relative;
  display: grid;
  padding: 0 !important;
  width: 100%;
  height: 450px;

  .image-viewer {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  @include mw(719px) {
    height: 400px;
  }

  .swiper {
    position: relative;
    overflow: hidden;
    height: 450px;
    width: 100%;
    border-radius: 10px;

    @include mw(719px) {
      border-radius: unset;
      height: 400px;
    }

    .slide {
      user-select: none;
      width: 100%;

      img {
        width: 100%;
        height: 450px;
        object-fit: contain;

        @include mw(719px) {
          height: 400px;
        }
      }
    }
  }

  & ::v-deep .agile__actions {
    justify-content: center;

    .agile__dots {
      position: absolute;
      bottom: 20px;
      display: flex !important;
      justify-content: center;
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        position: relative;
        color: transparent;
        border: 2px solid var(--white);
        height: 10px;
        width: 10px;
        border-radius: 10px;
        cursor: pointer;
        margin: 0 5px;

        &.agile__dot--current {
          background: var(--white);
        }

        button {
          position: absolute;
          top: -3px;
          left: -3px;
          height: 12px;
          width: 12px;
          background: transparent;
          border: none;
          border-radius: 12px;
        }
      }
    }
  }

  & ::v-deep .one-slide .agile__actions {
    display: none;
  }
}
</style>
