<template lang="pug">
  #app
    Header
    .content
      nuxt
    Footer

    DrawerList
    ModalList
    ToastList
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    flex: 1;
  }
}
</style>