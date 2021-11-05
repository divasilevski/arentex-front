<template lang="pug">
  DrawerWrapper(name="auth")
    .drawer-auth
      FormAuth
</template>

<style lang="scss" scoped>
.drawer-auth {
  height: calc(100% - 80px);
  padding: 30px;

  @include mw(500px) {
    height: calc(100% - 60px);
  }
}
</style>

