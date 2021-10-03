<template lang="pug">
  .product.page.container
    .product__head
      ProductSectionCarousel(:images="images")
      ProductSectionPrice
    .product__info
      ProductSectionDetails
      ProductSectionCategory

</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    return {
      images: [
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
.product {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include mw(1024px) {
    gap: 40px;
  }

  .product__head {
    display: flex;
    gap: 20px;

    @include mw(1024px) {
      flex-direction: column;
      gap: 30px;
    }

    .product-carousel {
      @include mw(719px) {
        margin: -40px -30px 0;
        width: calc(100% + 60px);
      }
    }
  }

  .product__info {
    display: flex;
    gap: 20px;

    @include mw(1024px) {
      flex-direction: column;
    }

    .product-details {
      @include mw(1024px) {
        order: 1;
      }
    }
  }
}
</style>