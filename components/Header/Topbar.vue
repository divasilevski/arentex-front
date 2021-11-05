<template lang="pug">
  .topbar.only-desktop
    .container
      .contacts
        img.icon(src="~/assets/icons/tel.svg" alt="TelIcon")
        span(v-html="contacts.tel")
        .diviator
        span(v-html="contacts.email")

      .login(@click="openAuth")
        img.icon(src="~/assets/icons/login.svg" alt="LoginIcon")
        | Войти / Регистрация
</template>

<script>
import { defineComponent, useStore } from '@nuxtjs/composition-api'
import { contacts } from '~/assets/scripts/contacts.js'

export default defineComponent({
  setup() {
    const store = useStore()

    // -= Methods =-
    const openAuth = () => store.commit('toggleOverlay', 'auth')

    return { contacts, openAuth }
  },
})
</script>

<style lang="scss" scoped>
.topbar {
  background: var(--black);
  height: 40px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--gray);
    font-size: 12px;
    height: 100%;

    .contacts {
      display: flex;
      align-items: center;

      .diviator {
        margin: 2px 10px 0;
        height: 10px;
        width: 1px;
        background: var(--gray);
      }
    }

    .login {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>