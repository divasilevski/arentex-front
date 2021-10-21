<template lang="pug">
  ProductSection.product-details
    .product-details__item(v-if="description")
      h3 Описание
      p {{ description}}

    .product-details__item(v-if="specs.length > 0") 
      h3 Характеристики
      .product-details__specifications
        .specification(v-for="spec in specs.slice(0, 5)")
          .specification__title {{ spec.title }}
          .specification__value {{ spec.value }}
        template(v-if="specs.length > 4")
          template(v-if="isMore")
            .specification(v-for="spec in specs.slice(5, -1)")
              .specification__title {{ spec.title }}
              .specification__value {{ spec.value }}
          template(v-else)
            .more
              .more__dots(@click="isMore = true")
                .more__dot
                .more__dot
                .more__dot

</template>

<script>
import { defineComponent, computed, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    description: {
      type: String,
      default:
        'Делайте нереально крутые снимки, используя только смартфон! 4 модуля камеры Samsung Galaxy A51 оснащены искуственным интелектом, которые подбирают оптимальные настройки экспозиции для любых условий. Емкостная батарея на 4000 мАч ддаёт возможность спокойно протянуть без подзарядки весь день, что особенно радует активных людей.',
    },
    specifications: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    return {
      isMore: ref(false),
      specs: computed(() => {
        return Object.entries(props.specifications).map((spec) => ({
          title: spec[0],
          value: spec[1],
        }))
      }),
    }
  },
})
</script>


<style lang="scss" scoped>
.product-details {
  min-width: 540px;

  @include mw(1024px) {
    min-width: unset;
  }

  .product-details__item:not(:last-child) {
    margin-bottom: 30px;

    @include mw(719px) {
      margin-bottom: 20px;
    }
  }

  .product-details__specifications {
    margin-top: 8px;

    .more {
      display: flex;
      justify-content: center;
      margin-top: 4px;

      .more__dots {
        display: flex;
        cursor: pointer;
        padding: 4px;

        &:hover .more__dot {
          background: var(--light-selected);
        }

        .more__dot {
          width: 7px;
          height: 7px;
          background: var(--light-gray);
          border-radius: 7px;
          margin: 0 4px;
        }
      }
    }

    .specification {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 8px 10px;
      margin: 0 -10px;
      z-index: 1;
      font-size: 16px;
      border-radius: 20px;

      @include mw(719px) {
        font-size: 14px;
        line-height: 20px;
      }

      &:hover {
        background: var(--light-selected);

        .specification__title,
        .specification__value {
          background: var(--light-selected);
        }
      }

      &::before {
        content: ' ';
        position: absolute;
        top: 22px;
        width: calc(100% - 20px);
        border-bottom: 1px dotted var(--light-gray);
        z-index: -1;

        @include mw(719px) {
          top: 20px;
        }
      }

      .specification__title {
        background: var(--white);
        padding-right: 8px;
        margin-right: 20px;

        @include mw(719px) {
          color: var(--gray);
          font-weight: 500;
        }
      }
      .specification__value {
        background: var(--white);
        padding-left: 8px;
        text-align: right;
      }
    }
  }
}
</style>