<template lang="pug">
  #app
    Header
    div
      nuxt
    Footer

    DrawerList
    ModalList
</template>

<style lang="scss" scoped>
#app {
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr;
}
</style>