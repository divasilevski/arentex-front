<template lang="pug">
  .search-bar(:class="{ open: isSearch }")
    .search-wrapper
      .container
        UIInput(
          v-model="search"
          ref="inputRef"
          type="text"
          placeholder="Искать в каталоге"
          @keyup.native.enter="searchHandler")

          img.icon(
            src="~/assets/icons/search-gray.svg"
            alt="SearchIcon"
            @click="searchHandler")

</template>

<script>
import { useStore, computed, ref, watch } from '@nuxtjs/composition-api'
import { useCatalog } from '~/composables/catalog'

export default {
  setup() {
    const { querySearch } = useCatalog()
    const store = useStore()
    const search = ref('')
    const inputRef = ref()

    // -= Computed =-
    const isSearch = computed(() => store.state.search)

    // -= Watch =-
    watch(isSearch, (value) => {
      value && inputRef.value.$el.querySelector('input').focus()
    })

    // -= Methods =-
    const searchHandler = () => {
      const searchString = search.value.trim()
      if (searchString) {
        querySearch(searchString)
        search.value = ''
        inputRef.value.$el.querySelector('input').blur()
      }
    }

    return { search, inputRef, isSearch, searchHandler }
  },
}
</script>

<style lang="scss" scoped>
.search-bar {
  height: 0px;
  transition: height 0.3s linear;
  overflow: hidden;

  .search-wrapper {
    display: flex;
    align-items: flex-end;
    height: 100%;
    transform: translateY(-50px);
    transition: transform 0.2s linear;

    @include mw(719px) {
      align-items: center;
    }

    .container {
      width: 100%;
    }

    .input {
      width: min(100%, 590px);
    }

    img {
      cursor: pointer;
    }
  }

  &.open {
    height: 60px;

    .search-wrapper {
      transform: translateY(0px);
    }
  }
}
</style>