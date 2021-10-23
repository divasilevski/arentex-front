<template lang="pug">
  DrawerWrapper(name="basket")
    .drawer-basket
      Basket

</template>

<style lang="scss" scoped>
.drawer-basket {
  height: calc(100% - 80px);

  @include mw(500px) {
    height: calc(100% - 60px);
  }
}
</style>

