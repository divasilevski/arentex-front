<template lang="pug">
  .bottombar
    .container
      .rights © {{ new Date().getFullYear() }} Все права защищены
      .company UPPERCASE
</template>

<style lang="scss" scoped>
.bottombar {
  height: 40px;
  background: var(--main);
  color: var(--gray);
  font-size: 12px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
}
</style>