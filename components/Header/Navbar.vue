<template lang="pug">
  nav.navbar(ref="navbarRef")
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
        .menu__item.search
          .menu__icon(@click="openSearch")
            img.icon(src="~/assets/icons/search.svg" alt="SearchIcon")
        .menu__item.only-not-desktop
          .menu__icon(@click="openMenu")
            img.icon(src="~/assets/icons/menu.svg" alt="MenuIcon")

</template>

<script>
import { defineComponent, useStore, ref } from '@nuxtjs/composition-api'
import { menu } from '~/assets/scripts/menu.js'

export default defineComponent({
  setup() {
    const navbarRef = ref(null)
    const store = useStore()
    const toggleMethod = () => {
      const isDesktop = navbarRef.value.offsetWidth > 1023
      return isDesktop ? 'toggleModal' : 'toggleDrawer'
    }
    const openMenu = () => store.commit('toggleDrawer', 'menu')
    const openBasket = () => store.commit(toggleMethod(), 'basket')
    const openSearch = () => store.commit(toggleMethod(), 'search')
    return { menu, openMenu, openBasket, openSearch, navbarRef }
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
          padding-right: 0;

          @include mw(1024px) {
            padding-right: 20px;
          }
          @include mw(500px) {
            padding-right: 12px;
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
        }
      }
    }
  }
}
</style>