<template lang="pug">
  nav.navbar
    .container
      nuxt-link(to="/")
        img.logo(src="~/assets/icons/logo.svg" alt="Arentex")
      .menu
        nuxt-link.menu__link.only-desktop(
          v-for="item in menu"
          :key="item.link"
          :to="item.link") {{ item.title }}
        .menu__item
          .menu__icon(@click="openBasket")
            img.icon(src="~/assets/icons/basket.svg" alt="BasketIcon")
            client-only
              .badge(v-if="badge")
        .menu__item.search
          .menu__icon(@click="openSearch")
            img.icon(src="~/assets/icons/search.svg" alt="SearchIcon")
          .search-active(:class="{ open: search }")
        .menu__item.only-not-desktop
          .menu__icon(@click="openMenu")
            img.icon(src="~/assets/icons/menu.svg" alt="MenuIcon")

</template>

<script>
import { defineComponent, useStore, computed } from '@nuxtjs/composition-api'
import { menu } from '~/assets/scripts/menu.js'

export default defineComponent({
  setup() {
    const store = useStore()

    // -= Computed =-
    const badge = computed(() => store.state.basket.basket.length > 0)
    const search = computed(() => store.state.search)

    // -= Methods =-
    const openMenu = () => store.commit('toggleDrawer', 'menu')
    const openBasket = () => store.commit('toggleOverlay', 'basket')
    const openSearch = () => store.commit('toggleSearch')

    return { menu, badge, search, openMenu, openBasket, openSearch }
  },
})
</script>


<style lang="scss" scoped>
.navbar {
  background: var(--main);
  height: 80px;

  @include mw(500px) {
    height: 60px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .logo {
      height: 35px;
      width: 196px;

      @include mw(500px) {
        height: 18px;
        width: 100px;
      }
    }

    .menu {
      display: flex;
      height: 100%;

      .menu__link {
        display: flex;
        align-items: center;
        padding: 0 20px;
        color: var(--gray);
        text-transform: uppercase;

        &.nuxt-link-active {
          background: var(--selected);
          color: var(--white);
        }

        &:hover {
          color: var(--white);
        }
      }

      .menu__item {
        display: flex;
        align-items: center;
        padding: 0 20px;
        user-select: none;

        &.only-not-desktop {
          padding-right: 0;
        }

        &.search {
          position: relative;
          padding-right: 0;

          @include mw(1024px) {
            padding-right: 20px;
          }
          @include mw(500px) {
            padding-right: 12px;
          }

          .search-active {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 62px;
            height: 0px;
            background: var(--accent);
            transition: height 0.2s linear;

            @include mw(500px) {
              width: 100%;
            }

            &.open {
              height: 4px;
            }
          }
        }

        @include mw(500px) {
          padding: 0 12px;
        }

        .menu__icon {
          cursor: pointer;
          position: relative;
          z-index: 1;

          &:hover {
            &:before {
              z-index: -1;
              position: absolute;
              content: ' ';
              width: 36px;
              height: 36px;
              border-radius: 36px;
              background: var(--selected);
              top: -7px;
              left: -7px;
            }
          }

          .badge {
            position: absolute;
            top: -6px;
            right: -6px;
            width: 8px;
            height: 8px;
            border-radius: 8px;
            background: var(--accent);
          }
        }
      }
    }
  }
}
</style>