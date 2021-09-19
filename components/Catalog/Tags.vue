<template lang="pug">
  .catalog-tags
    .tag(
      v-for="(tag, index) in tags"
      :key="'tag-' + index"
      @click="deleteTagHandler(tag.title)")
      .tag__value {{ tag.value }}
      img(src="~/assets/icons/close-black.svg" alt="CloseIcon")

</template>

.<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const tags = ref([
      { title: 'Категория', value: 'Велосипеды' },
      { title: 'Поиск', value: 'Зеленый' },
      { title: 'Цена за день', value: '500 - 1000' },
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
  margin-bottom: 10px;
  .tag {
    display: inline-flex;
    align-items: center;
    font-family: inherit;
    padding: 0 15px;
    background-color: var(--light-gray);
    border-radius: 38px;
    height: 26px;
    font-size: 14px;
    line-height: 16px;
    margin-right: 15px;
    cursor: pointer;
    margin-bottom: 10px;

    img {
      width: 12px;
      height: 12px;
      transition: 0.3s;
      margin-left: 10px;
    }

    &:hover {
      background-color: var(--light-selected);
      img {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
