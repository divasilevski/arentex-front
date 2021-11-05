<template lang="pug">
  DrawerWrapper(name="category")
    .drawer-category
      CategoryList
</template>

<style lang="scss" scoped>
.drawer-category {
  height: calc(100% - 80px);
  padding: 30px;

  @include mw(500px) {
    height: calc(100% - 60px);
  }
}
</style>

