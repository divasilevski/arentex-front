<template lang="pug">
  .page.catalog.container
    h1 Каталог
    //- CatalogTags
    .catalog__main
      CatalogFilter
      .catalog__grid
        CatalogSort
        CatalogGrid

</template>

<style lang="scss" scoped>
.catalog {
  .catalog__main {
    display: flex;

    @include mw(950px) {
      flex-direction: column;
    }
  }

  .catalog__grid {
    margin-left: 40px;
    width: 100%;

    @include mw(950px) {
      margin-left: unset;
    }
  }

  .catalog-grid__sort {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    cursor: pointer;
  }
}
</style>