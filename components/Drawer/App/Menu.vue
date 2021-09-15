<template lang="pug">
  DrawerWrapper(name="menu" v-slot="{ closeHandler }")
    .drawer-menu
      .drawer-menu__login(@click="closeHandler")
        img(src="~/assets/icons/login.svg")
        | Войти / Регистрация
      nuxt-link.drawer-menu__link(
        @click.native="closeHandler"
        v-for="item in menu"
        :key="item.link"
        :to="item.link") {{ item.title }}

      .drawer-menu__contacts
        img(src="~/assets/icons/tel.svg")
        a(href="tel:88005553535") 8 (800) 555-35-35
        .diviator
        a(href="mailto:info@arentex.ru") info@arentex.ru

      .drawer-menu__bottom
        .rights © {{ new Date().getFullYear() }} Все права защищены

</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { menu } from '~/assets/scripts/menu.js'

export default defineComponent({
  setup() {
    return {
      menu,
    }
  },
})
</script>


<style lang="scss" scoped>
.drawer-menu {
  height: 100%;
  color: var(--gray);
  background: var(--main);
  padding-top: 15px;

  .drawer-menu__login {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    margin: 0px 25px 20px;
    width: fit-content;
  }

  .drawer-menu__link {
    display: flex;
    align-items: center;
    padding: 20px 30px;
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

  .drawer-menu__contacts {
    margin-top: 100px;
    display: flex;
    align-items: center;
    color: var(--gray);
    font-size: 12px;
    padding: 0 27px;

    .diviator {
      margin: 2px 10px 0;
      height: 10px;
      width: 1px;
      background: var(--gray);
    }
  }

  .drawer-menu__bottom {
    margin-top: 5px;
    color: var(--gray);
    font-size: 12px;
    padding: 0 30px;
  }
}
</style>

