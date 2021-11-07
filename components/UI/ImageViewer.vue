<template lang="pug">
  .image-viewer
    .image-viewer__button(@click="isOpen = !isOpen")
      img(src="~/assets/icons/zoom.svg" alt="ZoomIcon")

    .viewer(v-if="isOpen" v-overflow)
      .viewer__bg
      .viewer__close(@click="isOpen = !isOpen")
        img.icon(src="~/assets/icons/close-black.svg" alt="CloseIcon")

      //- MAIN CAROUSEL
      agile.viewer__main(ref="main" :options="mainOptions" :as-nav-for="[thumbnails]")
        .slide(v-for="(slide, index) in images" :key="index")
          img(:src="mediaPath + slide"  draggable="false" alt="MainImage")

      //- THUMBNAILS CAROUSEL
      agile.viewer__thumbnails(
        v-if="images.length > 1"
        :class="{['count-' + images.length]: images.length < 5}"
        ref="thumbnails"
        :options="thumbnailsOptions"
        :as-nav-for="[main]"
      )
        div.slide(v-for="(slide, index) in images" :key="index")
          img(:src="mediaPath + slide" @click="thumbnails.goTo(index)" alt="ThumbnailsImage")
        template(slot="prevButton")
          .viewer__prev
            img.icon(src="~/assets/icons/arrow.svg" alt="LeftIcon")
        template(slot="nextButton")
          .viewer__next
            img.icon(src="~/assets/icons/arrow.svg" alt="RightIcon")

</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    return {
      isOpen: ref(false),
      main: ref(null),
      thumbnails: ref(null),

      mainOptions: {
        dots: false,
        navButtons: false,
      },

      thumbnailsOptions: {
        centerMode: true,
        dots: false,
        navButtons: props.images.length > 5,
        slidesToShow: props.images.length < 5 ? props.images.length : 5,
      },

      mediaPath: process.env.MEDIA_URL,
    }
  },
})
</script>


<style lang="scss" scoped>
.image-viewer {
  .image-viewer__button {
    user-select: none;
    cursor: pointer;
    position: relative;
    z-index: 1;

    img {
      width: 30px;
      height: 30px;
    }

    &:hover::before {
      background: var(--accent);
    }

    &::before {
      content: ' ';
      position: absolute;
      right: -5px;
      top: -5px;
      z-index: -1;
      background: var(--main);
      opacity: 0.05;
      width: 40px;
      height: 40px;
      border-radius: 40px;
    }
  }

  .viewer {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    @include filled;
    z-index: 200;

    .viewer__bg {
      position: absolute;
      @include filled;
      background: var(--white);
    }

    .viewer__close {
      user-select: none;
      cursor: pointer;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 40px;
      top: 20px;
      right: 20px;
      background: var(--light-gray);
      z-index: 1;

      &:hover {
        background: var(--light-selected);
      }
    }

    .viewer__prev,
    .viewer__next {
      user-select: none;
      cursor: pointer;
      position: absolute;
      top: 25px;
      width: 40px;
      height: 40px;
      border-radius: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--light-gray);

      @include mw(719px) {
        top: 4px;
        width: 32px;
        height: 32px;

        img {
          width: 15px;
          height: 15px;
        }
      }

      &:hover {
        background: var(--light-selected);
      }
    }

    .viewer__prev {
      left: -40px;
      img {
        transform: rotate(90deg);
      }
    }
    .viewer__next {
      right: -40px;
      img {
        transform: rotate(-90deg);
      }
    }

    .viewer__main {
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      .slide {
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        width: 100vw;
        height: 100vh;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .viewer__thumbnails {
      position: absolute;
      bottom: 30px;
      z-index: 1;
      width: 450px;
      height: 80px;

      @include mw(719px) {
        width: 225px;
        height: 40px;
      }

      &.count-2 {
        width: 180px;

        @include mw(719px) {
          width: 90px;
        }
      }

      &.count-3 {
        width: 280px;

        @include mw(719px) {
          width: 140px;
        }
      }

      &.count-4 {
        width: 350px;

        @include mw(719px) {
          width: 175px;
        }
      }

      .slide {
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        transition: opacity 0.3s;

        img {
          cursor: pointer;
          width: 80px;
          height: 80px;
          object-fit: cover;
          background: white;
          border: 2px solid var(--light-gray);
          border-radius: 10px;

          @include mw(719px) {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }

  & ::v-deep .agile__actions {
    button {
      background-color: unset;
      border: unset;
    }
  }
}
</style>