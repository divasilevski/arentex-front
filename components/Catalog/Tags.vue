<template lang="pug">
  .catalog-tags
    .tag(
      v-for="(tag, index) in tags"
      :key="'tag-' + index")
      .tag__title {{ tag.title + "&nbsp;"}}
      .tag__value {{ tag.value }}
      .tag__close(@click="deleteTagHandler(tag.title)")
        img(src="~/assets/icons/close-black.svg" alt="CloseIcon")
</template>

.<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const tags = ref([
      { title: 'КАТЕГОРИЯ', value: 'Велосипеды' },
      { title: 'ПОИСК', value: 'Зеленый' },
      { title: 'ЦЕНА ЗА ДЕНЬ', value: '500 - 1000' },
    ])
    const deleteTagHandler = (title) => {
      console.log(title)
      tags.value = tags.value.filter((tag) => tag.title !== title)
    }
    return { tags, deleteTagHandler }
  },
})
</script>

<style lang="scss" scoped>
.catalog-tags {
  margin: 25px 0 30px;

  .tag {
    display: inline-flex;
    align-items: center;
    font-family: inherit;
    padding: 0 15px;
    background-color: var(--light-gray);
    border-radius: 38px;
    height: 38px;
    font-size: 14px;
    line-height: 16px;
    margin-right: 15px;

    .tag__title {
      text-transform: uppercase;
      font-weight: 500;
    }

    .tag__value {
      color: var(--accent);
    }

    .tag__close {
      user-select: none;
      position: relative;
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      cursor: pointer;
      z-index: 10;

      img {
        width: 16px;
        height: 16px;
      }

      &:hover {
        &:before {
          z-index: -1;
          position: absolute;
          content: ' ';
          width: 24px;
          height: 24px;
          border-radius: 22px;
          background: var(--white);
          top: -1px;
          left: -1px;
        }
      }
    }
  }
}
</style>
