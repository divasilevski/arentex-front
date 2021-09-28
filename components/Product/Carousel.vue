<template lang="pug">
  .product-carousel
    agile.swiper
      .slide(v-for="(slide, index) in slides" :key="index")
        img(:src="slide" draggable="false")

</template>


<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
  data() {
    return {
      slides: [
        'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        'https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.product-carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.1);
  border-radius: 10px;

  @include mw(719px) {
    border-radius: unset;
  }

  .swiper {
    height: 400px;
    width: 100%;

    .slide {
      cursor: pointer;
      user-select: none;
      width: 100%;
      height: 400px;

      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
      }
    }
  }

  & ::v-deep .agile__dots {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
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
        top: -2px;
        left: -2px;
        height: 12px;
        width: 12px;
        background: transparent;
        border: none;
        border-radius: 12px;
      }
    }
  }
}
</style>
