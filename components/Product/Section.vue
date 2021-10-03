<template lang="pug">
  section.product-section
    slot
</template>

<style lang="scss" scoped>
.product-section {
  box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.2);
  background: var(--white);
  border-radius: 10px;
  padding: 20px;

  @include mw(1024px) {
    box-shadow: unset;
    border-radius: unset;
    padding: 0;
  }
}
</style>