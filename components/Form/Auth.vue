<template lang="pug">
  form.form-auth
    h2 Авторизация
    .form-auth__center
      p Данный раздел в разработке.
      p Не беспокойтесь, вы можете совершать покупки без авторизации.
</template>

<style lang="scss" scoped>
.form-auth {
  height: 100%;

  .form-auth__center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    p {
      text-align: center;
    }
  }
}
</style>
