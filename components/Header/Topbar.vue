<template lang="pug">
  .topbar.only-desktop
    .container
      .contacts
        img.icon(src="~/assets/icons/tel.svg" alt="TelIcon")
        a(href="tel:88005553535") 8 (800) 555-35-35
        .diviator
        a(href="mailto:info@arentex.ru") info@arentex.ru

      .login
        img.icon(src="~/assets/icons/login.svg" alt="LoginIcon")
        | Войти / Регистрация
</template>

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